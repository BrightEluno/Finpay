import { Chart } from "@/components/chart/Chart";
import { Landmark, MoveLeft } from "lucide-react";
import Image from "next/image";
// import Chart from "@/components/chart/Chart";

const About = () => {
  return (
    <div className="p-10 md:p-20">
      <div className="   flex flex-col items-center text-center">
        <h1 className="text-finpayBlue text-xs font-semibold uppercase">
          Why Us
        </h1>
        <h2 className="text-3xl font-semibold text-finpayDarkCharcoal mt-2">
          Why They Prefer Finpay
        </h2>

        {/* Text Section (Add More Content Here) */}
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-6 gap-6">
        <div className="w-[40%]  bg-finpayLightGrayishBlue p-10 rounded-lg mt-10">
          <h1 className="text-6xl font-bold text-finpayBlue">3k+</h1>
          <h3 className="pt-10 text-2xl font-semibold text-finpayDarkCharcoal">
            Businesses already running on Finpay
          </h3>
        </div>

        <div className="w-[40%]  bg-finpayLightGrayishBlue p-10 rounded-lg mt-10">
          <h1 className="text-2xl font-semibold text-finpayDarkCharcoal">
            Businesses already running on Finpay
          </h1>
          <div className="flex flex-rol pt-8  space-y-2 gap-4 items-center justify-center  text-center">
            <div className="w-[60px] h-[60px] rounded-xl bg-finpayBlue mt-2 ">
              <Image
                src="/nxrlogo.png"
                alt="Bank"
                width={44}
                height={44}
                className=" justify-center mx-auto mt-2"
              />
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="24"
                viewBox="0 0 100 24"
                fill="none"
                stroke="#ccc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 5L2 12L10 19" />
                <path d="M2 12H98" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="24"
                viewBox="0 0 100 24"
                fill="none"
                stroke="#ccc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M90 6L98 12L90 18" />
                <path d="M2 12H96" />
              </svg>
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-finpayDarkCharcoal pt-4">
              <Landmark className=" text-white text-center mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default About;
