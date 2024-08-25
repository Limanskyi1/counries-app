import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components";
import { Providers } from "./providers";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
