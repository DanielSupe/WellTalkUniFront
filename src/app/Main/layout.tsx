import MiniDrawer from "@/modules/GlobalComponents/SideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bienvenido",
  description: "WellTalkUni es una plataforma para la comunicación y el bienestar universitario.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <MiniDrawer>
            {children}
        </MiniDrawer>
    </>
  );
}
