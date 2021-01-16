import React from "react";

export interface Product {
  name: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="list">
      <li className="product-item">{product.name}</li>
    </div>
  );
};

export default ProductItem;
