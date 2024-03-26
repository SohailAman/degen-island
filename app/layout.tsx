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
      <head>
      <meta property="og:title" content="Falcrum^4" />
      <meta property="og:description" content="Bridging the Talent-Tech Gap" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Falcrum^4" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png" />
      </head>
      <body className={`${poppins.className} bg-[#ADD8EB]`}>{children}</body>
    </html>
  );
}
