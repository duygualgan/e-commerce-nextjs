import { Product } from "@/constans/type";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import ProductModal from "./ProductModal";
import ProductImages from "./ProductImages";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="group p-2 md:p-4 lg:p-6 flex flex-col items-center justify-center gap-4 border borderone bgone lg:h-[450px] rounded-xl hover:shadow-lg transition-all cursor-pointer duration-300">
      <ProductImages images={product?.attributes?.images} />
      <h2 className="font-bold text-lg ">{product?.attributes?.name}</h2>
      <div className="flex gap-3">
        {product?.attributes.sellingPrice && (
          <h2>${product?.attributes?.sellingPrice}</h2>
        )}
        <h2
          className={
            product?.attributes?.sellingPrice && "line-through text-gray-500"
          }
        >
          ${product?.attributes?.mrp}
        </h2>
      </div>
      <div className="flex flex-row gap-4">
        <Dialog>
          <DialogTrigger>
            <Button variant="destructive">Add To Cart</Button>
          </DialogTrigger>
          <DialogContent className="bgone sm:max-w-">
            <ProductModal product={product} />
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Button asChild>
          <Link href={`/product/${product?.attributes?.slug}`}> detail</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
