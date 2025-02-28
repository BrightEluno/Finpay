import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className=" relative w-[79%] h-[250px]  bg-finpayDeepTeal rounded-2xl mx-auto p-5 md:p-14 md:px-20" >
        <div className="flex gap-32">
          <div>
            <span className="uppercase text-finpayBlue text-xs font-semibold">
              try it now
            </span>

            <h1 className="text-3xl font-semibold text-white">
              Ready to level up your payment process?{" "}
            </h1>

            <p className="text-sm mt-3 text-[#A9C1CC] font-medium">
              Supports small business with simple invoicing, powerful
              integration, and cash flow management tools{" "}
            </p>
          </div>
          <div className="flex space-x-4 mt-10">
            <Button className="w-[130px] h-12 rounded-xl bg-finpayBlue ">
              Get Started Now
            </Button>
            <Button className="  w-[130px] rounded-xl h-12  border-2 border-finpayDarkTeal bg-transparent text-white">
              Learn More <ArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
      <footer className="bg-finpayLightGrayishBlue w-full h-[400px] mt-[-100px] pt-[150px] ">
        <h1></h1>
        <div className="flex justify-between items-center p-5 text-sm ">
          <h1 className="font-bold text-xl text-finpayDarkTeal">Finpay</h1>
            <ul className=" ">
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
          <div>
            <p>2022 FinPay. All rights reserved.</p>
          </div>
         </div> 
        
      </footer>
    </div>
  );
};

export default Footer;
