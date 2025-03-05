import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-20">
      {/* CTA Section */}
      <div className=" w-[90%] md:w-[79%] h-[250px] bg-finpayDeepTeal rounded-2xl mx-auto p-5 md:p-14 md:px-20 relative">
        <div className="flex flex-col md:flex-row gap-10 md:gap-32 items-center">
          <div className="text-center md:text-left">
            <span className="uppercase text-finpayBlue text-xs font-semibold">
              Try it now
            </span>
            <h1 className="text-3xl font-semibold text-white">
              Ready to level up your payment process?
            </h1>
            <p className="text-sm mt-3 text-[#A9C1CC] font-medium">
              Supports small businesses with simple invoicing, powerful
              integration, and cash flow management tools.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button className="w-[130px] h-12 rounded-xl bg-finpayBlue">
              Get Started Now
            </Button>
            <Button className="w-[130px] h-12 rounded-xl border-2 border-finpayDarkTeal bg-transparent text-white">
              Learn More<ArrowUpRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-finpayLightGrayishBlue w-full h-auto md:h-[400px] mt-[-100px] pt-[150px] px-10 md:px-[130px] ">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="font-bold text-xl text-finpayDarkTeal">Finpay</h1>

         
          <div className="grid grid-cols-2 md:flex gap-10 md:gap-20 mt-8 md:mt-0">
            
            <ul>
              <span className="text-lg text-finpayDarkTeal font-medium">
                Solution
              </span>
              <div className="flex flex-col gap-2 mt-3">
                <li><a href="/" className="text-gray-600 font-medium">Small Business</a></li>
                <li><a href="/" className="text-gray-600 font-medium">Freelancers</a></li>
                <li><a href="/" className="text-gray-600 font-medium">Customers</a></li>
                <li><a href="/" className="text-gray-600 font-medium">Taxes</a></li>
              </div>
            </ul>

            
            <ul>
              <span className="text-lg text-finpayDarkTeal font-medium">
                Company
              </span>
              <div className="flex flex-col gap-2 mt-3">
                <li><a href="/" className="text-gray-600 font-medium">About</a></li>
                <li><a href="/" className="text-gray-600 font-medium">Career</a></li>
                <li><a href="/" className="text-gray-600 font-medium">Contact</a></li>
              </div>
            </ul>

            {/* Learn */}
            <ul>
              <span className="text-lg text-finpayDarkTeal font-medium">
                Learn
              </span>
              <div className="flex flex-col gap-2 mt-3">
                <li><a href="/" className="text-gray-600 font-medium">Blog</a></li>
                <li><a href="/" className="text-gray-600 font-medium">Ebooks</a></li>
                <li><a href="/" className="text-gray-600 font-medium">Guides</a></li>
                <li><a href="/" className="text-gray-600 font-medium">Template</a></li>
              </div>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mt-8 md:mt-0">
            <span className="text-lg text-finpayDarkTeal font-medium">
              Follow us on
            </span>
            <div className="flex gap-3 mt-3">
              <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-[#e9f3fa] mt-10 pt-5 text-center">
          <small className="text-finpayDeepTeal font-medium">
            &copy; {new Date().getFullYear()} FinPay. All rights reserved.
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
