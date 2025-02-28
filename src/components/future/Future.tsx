"use client";

import { Card } from "../ui/card";
import Image from "next/image";

const Future = () => {
  return (
    <div>
      <Card className="w-[90%] max-w-[1200px] mx-auto mt-10 mb-8">
        <div className="p-10 md:p-20">
          <span className="text-finpayBlue text-xs font-semibold uppercase">
            Future payment
          </span>

          <div className="flex flex-col md:flex-row mt-6 gap-6">
            {/* LEFT */}
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-medium text-finpayDarkCharcoal">
                Experience that grows with your scale
              </h1>
            </div>
            {/* RIGHT */}
            <div className="w-full md:w-1/2">
              <p className="text-gray-600 text-base font-medium md:ml-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eget sapien sapien. Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-start space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1D1E20"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              <h2 className="text-finpayDarkCharcoal text-xl font-medium mt-4">
                Free Transfers
              </h2>
              <p className="font-medium text-sm text-gray-600">
              Create a financial experience and automate repeat purchases by
              scheduling recurring payments.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start space-y-2">
              <Image src="/landmark.png" alt="Bank" width={44} height={44} />

              <h2 className="text-finpayDarkCharcoal text-xl font-medium mt-4">
                Multiple account
              </h2>
                <p className="font-medium text-sm text-gray-600">
                Run your operations with cash from your account and generate yield stored in your account.
                </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1D1E20"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="M12 22V2" />
              </svg>
              <h2 className="text-finpayDarkCharcoal text-xl font-medium mt-4">
                Unmatched security
              </h2>
              <p className="font-medium text-sm text-gray-600">
                Securely manage your finances with organizations-wide MFA, card-locking, and Account-level controls
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Future;
