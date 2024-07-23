import { Product } from "@/constans/type";
import React from "react";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div>
      <div>ProductItem</div>
    </div>
  );
};

export default ProductItem;
