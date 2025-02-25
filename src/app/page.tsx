'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ArrowDownToDot, ArrowUpRight, Nfc } from "lucide-react";
import Future from "@/components/future/Future";
import About from "./about/page";

export default function Home() {
  return (
    <div className="h-[200vh]">
      <div className="bg-finpayPowderBlue h-[100vh]">
        {/* Navbar */}
        <div className="flex justify-between items-center px-6 md:px-10 py-3">
          {/* <div className="flex  gap-10"> */}
          <h1 className="font-bold text-xl text-finpayDarkTeal">Finpay</h1>
          <ul className="flex space-x-4  text-base ml-[-450px]  font-semibold">
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/customers">Customers</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/blog">Learn</a>
            </li>
          </ul>
          {/* </div> */}
          <div className="flex space-x-4">
            <Button variant="secondary" className="w-[100px]">
              Login
            </Button>
            <Button className="w-[100px] bg-finpayBlue hover:bg-finpayDeepIndigo">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-center items-center p-6 md:p-10 gap-8">
          {/* Right Content */}
          <div className="w-full md:w-1/3">
            <h1 className="text-5xl font-extrabold text-finpayDarkCharcoal">Get paid early</h1>
            <h2 className="text-4xl font-medium mt-2 text-finpayDarkCharcoal">
              Save automatically from all your pay.
            </h2>
            <p className="text-base font-medium mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eget sapien sapien.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2 pt-5">
              <Input className="h-[45px] rounded-xl  " type="email" placeholder="Email" />
              <Button className="  bg-finpayBlue rounded-xl h-[45px]  " type="submit">Subscribe<ArrowUpRight /> </Button>
            </div>
            <div className=" flex items-center space-x-8 pt-10">
              <Image src="/Logo.svg" alt="" width={90 } height={90}/>
              <Image src="/vivint.svg" alt="" width={90 } height={90}/>
              <Image src="/amd.svg" alt="" width={90 } height={90}/>
              




            </div>
          </div>

          {/* Left Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center mt-[80px]">
            <Image
              src="/card.png"
              alt="Card"
              width={350}
              height={350}
              className="rounded-lg"
            />

            <div className="absolute top-[-30px] ml-[236px] w-[200px] h-[243px] bg-finpayBlue rounded-xl pt-10  ">
              <p className="text-finpayPowderBlue text-xs font-medium pl-6">
                Credit Card
              </p>
              <h3 className="text-white text-xl font-medium pl-6 ">
                234 **** ****
              </h3>
              <div className=" absolute bottom-0 rounded-b-xl bg-finpayDarkTeal w-[200px] h-[70px] pt-5 ">
                <div className="flex justify-between px-5">
                <Image
                  src="/visa.png"
                  alt="Credit Card"
                  width={80}
                  height={80}
                  // className="pl-6"
                />
                <Nfc className="text-white text-xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Features Section */}
      <Future />
      <About />
      </div>
      
    </div>
  );
}
