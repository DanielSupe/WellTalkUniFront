'use client'
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import Image from "next/image";

export default function Home() {
  const {contador} = useAppSelector((state)=>({
    contador:state.RegisterSlice.prueba
  }))


  return (
    <main className="">
        <p>contador:{contador}</p>
    </main>
  );
}
