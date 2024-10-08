"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import Slider from "../_components/Slider";
import CategoryList from "../_components/CategoryList";
import ProductLits from "../_components/Product/ProductLits";

export default function Home() {
  const { toast } = useToast();
  return (
    <div>
      <Slider />
      <CategoryList />
      <ProductLits />
    </div>
  );
}
