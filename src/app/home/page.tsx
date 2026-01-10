import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import WhyUs from "@/components/WhyUs";
import TestimonialCard from "@/components/TestimonialCard"
import Webinar from "@/components/Webinar";
import { Instructor } from "@/components/Instructor";
import Footer from "@/components/Footer";



export default function page() {
  return (
    <div className=" min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <HeroSection/>
     
     <Features />
     <WhyUs/>
     <TestimonialCard/>
     <Webinar/>
    <Instructor/> 
    <Footer />
    
     
     
    
    </div>
  );
}
