"use client";
import { getSliders } from "@/actions/getSliders";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const sliders = await getSliders();
        setSliders(sliders);
      } catch (error) {
        console.log("Faild to fetch Sliders");
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
