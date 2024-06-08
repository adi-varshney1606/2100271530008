// AllProductsPage.js
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    fetchProducts();
  }, []);


  
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000",
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODI0OTA0LCJpYXQiOjE3MTc4MjQ2MDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVmOTIzODVlLTFlMDgtNGNhNy1hNzM1LTdkNTgyNWQxMDUwMSIsInN1YiI6ImFkaXR5YTIxMTUzMTEwQGFrZ2VjLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiVmFyc2huZXkiLCJjbGllbnRJRCI6IjVmOTIzODVlLTFlMDgtNGNhNy1hNzM1LTdkNTgyNWQxMDUwMSIsImNsaWVudFNlY3JldCI6IktLY3FaR0JacXdUdkVlVHoiLCJvd25lck5hbWUiOiJBZGl0eWEiLCJvd25lckVtYWlsIjoiYWRpdHlhMjExNTMxMTBAYWtnZWMuYWMuaW4iLCJyb2xsTm8iOiIyMTAwMjcxNTMwMDA4In0.L1rqclwGzx3vIzMdbtvPf1sLSWCP6uOkW03XewnFndY",
          },
        }
      );
      //   if (response.ok) {
      //     const data = await response.json();
      //     console.log(data);
      //     setProducts(data);
      //   } else {
      //     console.log(response);
      //     console.error("Failed to fetch products");
      //   }

      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl m-10">All Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;
