
import type { Metadata } from "next";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import Image from "next/image";
import { menuSVG } from "../../public/svgs/svgs";
import Box from '@mui/material/Box';
import HomeTemplate from "@/modules/home/template";

export const metadata: Metadata = {
  title: "Home",
  description: "Bienvenido a Well talk Uni, una plataforma para el bienestar universitario.",
};


export default function Home() {

  return (
    <HomeTemplate/>
  );
}
