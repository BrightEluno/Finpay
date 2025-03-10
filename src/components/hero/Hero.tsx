import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Nfc } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-6 md:p-10 gap-8">
      <div className=" w-full lg:w-1/3 ">
        <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-finpayDarkCharcoal w-full">Get paid early</h1>
        <h2 className="text-4xl font-medium mt-2 text-finpayDarkCharcoal ">Save automatically from all your pay.</h2>
        <p className="text-base font-medium mt-4 text-gray-600">Support small businesses with simple invoicing powerful integrations, and cash flow management tolls.</p>
        <div className="flex w-full max-w-sm items-center space-x-2 pt-5">
          <Input className="h-[45px] rounded-xl" type="email" placeholder="Email" />
          <Button className="bg-finpayBlue rounded-xl h-[45px]" type="submit">Subscribe<ArrowUpRight /></Button>
        </div>
        <div className="flex items-center space-x-8 pt-10">
          <Image src="/Logo.svg" alt="" width={90} height={90} />
          <Image src="/vivint.svg" alt="" width={90} height={90} />
          <Image src="/amd.svg" alt="" width={90} height={90} />
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 flex justify-center mt-[80px]">
        <Image src="/card.png" alt="Card" width={350} height={350} className="rounded-lg md:w-[64%]  lg:w-[68%] xl:w-[59%]" />
        <div className="absolute top-[-30px] ml-[236px] w-[200px] h-[243px] bg-finpayBlue rounded-xl pt-10">
          <p className="text-finpayPowderBlue text-xs font-medium pl-6">Credit Card</p>
          <h3 className="text-white text-xl font-medium pl-6">234 **** ****</h3>
          <div className="absolute bottom-0 rounded-b-xl bg-finpayDarkTeal w-[200px] h-[70px] pt-5">
            <div className="flex justify-between px-5">
              <Image src="/visa.png" alt="Credit Card" width={80} height={80} />
              <Nfc className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}