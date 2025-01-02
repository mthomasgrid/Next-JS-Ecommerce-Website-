//Importing Components
import Unique from "@/Components/Unique/Unique";
import Blog from "@/Components/Blog/Blog";
import FeaturedProducts from "@/Components/Featured/Featured";
import LatestProducts from "@/Components/Latest/Latest";
import TrendingProducts from "@/Components/Trending/Trending";
import Categories from "@/Components/Categories/Categories";
import DiscountItem from "@/Components/Discount/Discount";
import Hero from "@/Components/Hero/Hero";
import NewsLetter from "@/Components/NewsLetter/NewsLetter";

//Importing Skeleton for Components
import { Suspense } from "react";
import FeatureSkeleton from "@/Components/Featured/loading";
import LoadingSkeleton from "@/Components/Latest/loading";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Suspense fallback={<FeatureSkeleton />}>
        <FeaturedProducts />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <LatestProducts />
      </Suspense>

      <Unique />
      <TrendingProducts />
      <DiscountItem />
      <Categories />
      <NewsLetter />

      <Blog />


    </>
  );
}
