import { ArrowUpRight } from "lucide-react";

const Mission = () => {
  return (
    <div className="items-center text-center mt-10 md:mt-20  ">
      <span className="uppercase text-finpayBlue text-xs font-semibold">
        our mission
      </span>
      <h2 className="text-3xl font-semibold text-finpayDarkCharcoal mt-3">
        We&apos;ve helped <br /> innovative companies
      </h2>
      <p className="text-sm mt-3 text-gray-600 font-medium">
        Hundreds of all size and across all industries <br /> have made a big
        improvement with us.
      </p>

      <div className="flex flex-wrap items-center text-center justify-center gap-[90px] mt-10">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-semibold text-finpayDarkCharcoal flex items-center gap-2">
            24%
          </h2>
          <span className="text-md font-medium text-finpayDarkTeal mt-3">
            Revenue business
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-semibold text-finpayDarkCharcoal">
            180K
          </h2>
          <span className="text-md font-medium text-finpayDarkTeal mt-3">
            In annual revenue
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-semibold text-finpayDarkCharcoal">
            10+
          </h2>
          <span className="text-md font-medium text-finpayDarkTeal mt-3">
            Months of runway
          </span>
        </div>
      </div>
      <div className="mt-10 ">
        <span className="uppercase text-finpayDarkTeal text-xs font-semibold ">
          choose plan
        </span>
        <div className="flex flex-rol items-center text-start  justify-center mt-5 gap-5">
          <div className="bg-finpayPowderBlue w-[35%] h-[200px] rounded-2xl p-10 ">
            <div className="flex flex-col ">
              
                <h2 className="text-3xl text-finpayDarkCharcoal font-semibold">
                  Plus
                </h2>
                <div className="flex justify-between mt-20 ">
                <span className="text-finpayDarkTeal text-xl font-medium">
                  $2.99/month{" "}
                </span>
                <ArrowUpRight className="text-finpayDarkTeal w-8 " />
              </div>
            </div>
          </div>
          <div className="bg-finpayBlue w-[35%] h-[200px] rounded-2xl p-10 ">
            <div className="flex flex-col ">
              
                <h2 className="text-3xl text-white font-semibold">
                  Premium
                </h2>
                <div className="flex justify-between mt-20 ">
                <span className="text-white text-xl font-medium">
                  $6.99/month
                </span>
                <ArrowUpRight className="text-white w-8 " />
                <footer></footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
