"use client";

import Image from "next/image";
import Vintage from "../../public/VINTAGE.jpg";
import { MdAdsClick } from "react-icons/md";
import ZeusLogo from "../../public/ZeusLogo.jpeg";
import { TbHandClick } from "react-icons/tb";
import Link from "next/link";
import { useAudio } from "@/components/AudioContext";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const { playmusic } = useAudio();
  return (
    <div className="flex justify-center items-center h-screen pt-10 px-2 md:px-0 ">
      <div className="flex flex-col space-y-10">
        <h1 className="font-extrabold text-red-900 text-sm text-center 2xl:text-4xl  md:text-2xl">
          <span>VINTAGE_JAB</span>{" "}
          <span className="text-white"> ZEUS NETWORK PORTFOLIO</span>
        </h1>
        <div className="flex md:space-x-10 space-x-2">
          <div className="md:h-[300px] md:w-[270px] h-[180px] w-[160px] 2xl:h-[600px] 2xl:w-[570px] rounded-lg overflow-hidden">
            <Link href="/Home" onClick={playmusic}>
              {" "}
              <Image
                src={Vintage}
                height={500}
                width={500}
                className="h-full w-full"
                alt="avatar"
              />{" "}
            </Link>
          </div>
          <motion.div
            className="md:h-[300px] shadow-lg shadow-white md:w-[300px]  h-[180px] w-[180px] 2xl:h-[600px] 2xl:w-[600px]  rounded-full overflow-hidden"
            animate={{ rotate: 360 }} // Defines a full rotation
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Link href="/Home" onClick={playmusic}>
              <Image
                src={ZeusLogo}
                height={500}
                width={500}
                className="h-full w-full"
                alt="Zeus Image"
              />
            </Link>
          </motion.div>
        </div>
        <div className="flex justify-center pt-5 ">
          <Link href="/Home" onClick={playmusic}>
            <TbHandClick className="h-20 w-20 text-purple-500 animate-bounce cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
