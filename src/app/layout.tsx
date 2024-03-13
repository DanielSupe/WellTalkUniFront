import type { Metadata } from "next";

import "./globals.css";
import Providers from "@/Store/providers";
import MiniDrawer from "@/modules/GlobalComponents/SideBar";
import NavW from "@/modules/GlobalComponents/nav";

export const metadata: Metadata = {
  title: "Well talk Uni",
  description: "WellTalkUni es una plataforma para la comunicación y el bienestar universitario.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className="font-body">
          {/* <MiniDrawer> 
            {children}
            </MiniDrawer> */}
            {children}
          
        </body>
      </Providers>
    </html>
  );
}
