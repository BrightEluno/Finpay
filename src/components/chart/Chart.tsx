"use client";

import { ChevronDown } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 10 },
  { month: "February", desktop: 15 },
  { month: "March", desktop: 35 },
  { month: "April", desktop: 40 },
  { month: "May", desktop: 45 },
  { month: "June", desktop: 60 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2A8E9E",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <div className=" w-[82%] max-w-[1200px] h-[340px] mx-auto mt-5 mb-8 bg-finpayLightGrayishBlue rounded-lg flex flex-col">
      
      {/* Pushes CardContent to the bottom */}
      <div className="flex-grow"></div>

      {/* Centered CardContent using flex */}
      
      <div className="flex justify-end  ">
      <div className=" w-[250px] mx-auto mt-10">
        <h3 className="text-2xl font-semibold text-finpayDarkCharcoal">No asset volatility</h3>
        <p className="text-gray-600 text-sm font-medium w-[190px] mt-5  items-center">
          generate returns on your cash reserves without making any investment
        </p>
      </div>
        <CardContent className="bg-white w-full md:w-[60%] rounded-xl rounded-b-none shadow-none mr-[50px] ">
          <div className="flex justify-between items-center p-4">
            <div>
              <span className="text-gray-600">Summary</span>
              <h2 className="font-bold text-2xl text-finpayDarkCharcoal">
                $1,874,287
              </h2>
            </div>
            <div>
              <span className="flex font-medium text-sm gap-1 text-finpayDarkTeal">
                6 Months <ChevronDown className="w-4 text-finpayDarkTeal" />
              </span>
            </div>
          </div>
          <ChartContainer className="h-[180px] w-full" config={chartConfig}>
            <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} horizontal={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
                
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill={chartConfig.desktop.color}
                fillOpacity={0.4}
                stroke={chartConfig.desktop.color}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </div>
    </div>
  );
}
