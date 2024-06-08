// ProductCard.js
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card py-10 px-10 m-10 bg-slate-300 rounded-md">
      <h2 className="text-xl my-2">{product.productName}</h2>
      <p className="text-xl my-2">Price: ${product.price}</p>
      <p className="text-xl my-2">Rating: {product.rating}</p>
      <p className="text-xl my-2">Discount: {product.discount}%</p>
      <p className="text-xl my-2">Availability: {product.availability}</p>
      {/* Add image and other details */}
    </div>
  );
}

export default ProductCard;
