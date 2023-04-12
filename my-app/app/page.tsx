"use client";
import MidArticles from "@/components/Hero/MidArticles";
import MidHero from "@/components/Hero/MidHero";
import MidProducts from "@/components/Hero/MidProducts";
import MidSocials from "@/components/Hero/MidSocials";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <main className="transition_nav">
      <div className="lg:h-[550px] h-[200px] relative border-b-4 border-primary">
        <ImageSlider />
      </div>
      <MidHero />
      <MidProducts />
      <MidSocials />
      <MidArticles />
    </main>
  );
}
