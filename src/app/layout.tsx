import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/Store/providers";
import { Nav, NavLink } from "reactstrap";
import NavW from "@/modules/GlobalComponents/nav";
import MiniDrawer from "@/modules/GlobalComponents/SideBar";
const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
          <MiniDrawer> {children}</MiniDrawer>
          
        </body>
      </Providers>
    </html>
  );
}
