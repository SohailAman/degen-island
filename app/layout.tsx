import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({ weight: "400", preload: true, subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Degen Island",
  description: "the hub of the meme ecosystem.  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#ADD8EB]`}>{children}</body>
    </html>
  );
}
