import AboutPage from "@/components/about-us";
import BlogPage from "@/components/blog";
import DiscountComp from "@/components/discount";
// import FooterComp from "@/components/footer";
import Hero from "@/components/hero";
import ProductPage from "@/components/products";
import TestimonialPage from "@/components/testimonial";


export default function Home() {
  return (
   <div>
   <Hero />
   <ProductPage />
   <AboutPage />
   <DiscountComp />
   <BlogPage />
   <TestimonialPage />

   </div>
  );
}
