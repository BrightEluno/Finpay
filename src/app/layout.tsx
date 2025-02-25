import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const turnkey = localFont({
  src: [
    {
      path: "../../public/fonts/Turnkey-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../public/fonts/Turnkey-SemiBold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/fonts/Turnkey-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/fonts/Turnkey-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/Turnkey-Light.woff2",
      style: "normal",
      weight: "300",
    },
  ],
  variable: "--turnkey-sans",
});

export const metadata: Metadata = {
  title: "Finpay",
  description: " Finpay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${turnkey.className}  `}>{children}</body>
    </html>
  );
}
