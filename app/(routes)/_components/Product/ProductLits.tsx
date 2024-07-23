"use client";
import { getProducts } from "@/actions/GetProducts";
import React, { useEffect, useState } from "react";
import HomeProductSkeleton from "../Skeleton/HomeProductSkeleton";
import ProductItem from "./ProductItem";

const ProductLits = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts(
          "/products?sort[0]=id:desc&filters[isTop]=true&pagination[start]=0&pagination[limit]=8&populate=*"
        );
        setProducts(products);
      } catch (error) {
        console.log("Faild to fetch Products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <HomeProductSkeleton />
        </div>
      ) : (
        <div className="mt-10 container">
          <h2 className="textone font-semibold text-2xl lg:text-3xl">
            Shop By Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 mb-8">
            {products.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductLits;
