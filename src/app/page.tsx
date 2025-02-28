import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Future from "@/components/future/Future";
import About from "../components/about/page";
import StepPage from "../components/step/page";
import Mission from "@/components/mission/Mission";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="h-full">
      <div className="bg-finpayLightGrayishBlue h-[100vh]">
        <Navbar />
        <Hero />
        <Future />
        <About />
        <StepPage />
        <Mission />
        <Footer />
      </div>
    </div>
  );
}