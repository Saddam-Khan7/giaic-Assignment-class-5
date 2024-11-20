import Contact from "@/components/Contact";
import Downloadcv from "@/components/downloadcv";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Servicess from "@/components/Servicess";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <Downloadcv />
      <Servicess />
      <Contact />
    </div>
  );
}
