import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 md:px-10 py-3">
      <h1 className="font-bold text-xl text-finpayDarkTeal">Finpay</h1>
      <ul className="md:flex space-x-4 text-base ml-[-450px] font-semibold hidden">
        <li><a href="/product">Product</a></li>
        <li><a href="/customers">Customers</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/blog">Learn</a></li>
      </ul>
      <div className="flex space-x-4">
        <Button variant="secondary" className="w-[100px]">Login</Button>
        <Button className="w-[100px] bg-finpayBlue hover:bg-finpayDeepIndigo">Sign Up</Button>
      </div>
    </div>
  );
}