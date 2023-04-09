"use client";
import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";

export default function Home() {
  const slides = [
    { url: "/hero.png", title: "Image 1" },
    { url: "/hero2.png", title: "Image 2" },
    { url: "/hero.png", title: "Image 3" },
  ];
  return (
    <main className="">
      {/* <div className="relative h-[550px] w-screen">
        <ImageSlider slides={slides} />
      </div> */}
    </main>
  );
}
