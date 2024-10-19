import type { Metadata } from "next";
import { Inter, Lora, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"],
  weight: ['400'],
  style: ['normal'],
 });

export const metadata: Metadata = {
  title: "Rajat Refrigiration",
  description: "It is a website that provides services for refrigeration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
