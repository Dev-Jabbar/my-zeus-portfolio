"use client";

import AboutMe from "@/(routes)/AboutMe";
import Image from "next/image";
import React, { useState } from "react";
import VINTAGE_JAB from "../../../public/VINTAGE.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";

import { GrFormPrevious } from "react-icons/gr";

import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

import { CiPlay1 } from "react-icons/ci";

import { CiPause1 } from "react-icons/ci";
import { useAudio } from "@/components/AudioContext";

import { motion, useInView } from "framer-motion";

const page = () => {
  const { toggleAudio, isPlaying, audioElement } = useAudio();

  // Add an event listener for when the audio ends
  React.useEffect(() => {
    if (audioElement) {
      const handleAudioEnd = () => {
        // Reset isPlaying when audio ends
        toggleAudio(false); // Assuming toggleAudio(false) stops the audio
      };

      audioElement.addEventListener("ended", handleAudioEnd);

      return () => {
        audioElement.removeEventListener("ended", handleAudioEnd);
      };
    }
  }, [audioElement, toggleAudio]);

  const memes = [
    { id: 1, image: "/meme.png" },
    { id: 2, image: "/meme1.png" },
    { id: 3, image: "/meme2.png" },
    { id: 4, image: "/meme3.png" },
    { id: 5, image: "/meme4.png" },
  ];

  const Threads = [
    {
      id: 1,
      title: "Why did Zeus choose Solana over other blockchains?",
      date: "18th Nov 2024",
      link: "https://x.com/VINTAGE_JAB/status/1858492297467359502",
    },
    {
      id: 2,
      title:
        "How Zeus Network Enables Cross-Chain Liquidity Without Traditional Bridges",
      date: "15th Nov 2024",
      link: "https://x.com/VINTAGE_JAB/status/1857336464482107569",
    },
    {
      id: 3,
      title:
        "How Zues network, ZPL, Apollo, ZeusNode, ZeusScan, zBTC  all work together",
      date: "14th Nov 2024",
      link: "https://x.com/VINTAGE_JAB/status/1856988327523557808",
    },
    {
      id: 4,
      title: "BTC Price Surge & Future Impact on zBTC",
      date: "13th Nov 2015",
      link: "https://x.com/VINTAGE_JAB/status/1856623023081586896",
    },
    {
      id: 6,
      title: "Zeus Network vs. Zeus the God | APOLLO vs. Apollo the God",
      date: "11th Nov 2024",
      link: "https://x.com/VINTAGE_JAB/status/1856032966255706369",
    },
    {
      id: 7,
      title: "ZeusNode: The Backbone of Zeus Network",
      date: "13th Nov 2024",
      link: "https://x.com/VINTAGE_JAB/status/1856623023081586896",
    },
    {
      id: 5,
      title: "Zeus Network vs. Zeus the God | APOLLO vs. Apollo the God",
      date: "11th Nov 2024",
      link: "https://x.com/VINTAGE_JAB/status/1856032966255706369",
    },
    {
      id: 8,
      title: "Zeus Network and blockchain fragmentation.",
      date: "12th Nov 2024",
      link: "https://x.com/VINTAGE_JAB/status/1856354196032741388",
    },
    {
      id: 9,
      title: "Why zBTC is the Future of Bitcoin on Solana",
      date: "10th Nov 2024",
      link: "https://x.com/VINTAGE_JAB/status/1855674747071111313",
    },
    {
      id: 10,
      title: "Zeus network video thread",
      date: "10th Nov 2024",
      link: "https://x.com/VINTAGE_JAB/status/1855612169531842703",
    },
    {
      id: 11,
      title: "Unlocking New Horizons for Bitcoin on Solana with Zeus Network ",
      date: "9th Nov 2024",
      link: "https://x.com/VINTAGE_JAB/status/1855175085683839317",
    },
  ];

  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => setShowFullBio((prev) => !prev);
  return (
    <div className="pt-10 md:w-[800px] mx-auto xl:w-[1000px] px-4 2xl:w-[1500px] macbook13:w-[2000px]  ">
      <div className="flex flex-col  space-y-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ delay: 0.1 }}
          title="Play/stop music"
          className="cursor-pointer flex items-center"
          onClick={toggleAudio}
        >
          {isPlaying ? (
            <CiPause1 className="h-8 w-8 macbook13:h-16 macbook13:w-16 text-blue-600" />
          ) : (
            <CiPlay1 className="h-8 w-8 macbook13:h-16 macbook13:w-16 text-blue-600" />
          )}
          <span className="ml-2 text-sm macbook13:text-xl">
            {isPlaying ? "Pause" : "Play"} Music
          </span>
        </motion.div>
        <motion.h1
          className="md:text-5xl text-2xl macbook13:text-8xl  font-extrabold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ delay: 1 }}
        >
          About Me
        </motion.h1>
        <div className="md:flex md:flex-row md:space-x-6 macbook13:space-x-20 space flex flex-col-reverse">
          <div className="max-w-lg macbook13:max-w-4xl text-pretty flex flex-col space-y-10 p-2 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ delay: 1.5 }}
              className="macbook13:text-2xl "
            >
              Welcome to my Zeus Network portfolio! Here, you'll find my
              contributions to the ecosystem, including Twitter threads, memes,
              and active roles on Discord. Explore my work as I share insights
              and showcase my passion for Zeus Network's mission to
              revolutionize DeFi.
            </motion.div>
            <div className="flex space-x-5 items-center">
              <Link href="https://x.com/VINTAGE_JAB">
                <FaSquareXTwitter className="h-[50px] w-[50px] macbook13:h-[80px] macbook13:w-[80px] text-blue-400" />
              </Link>
              <Link href="https://github.com/Dev-Jabbar">
                <FaSquareGithub className="h-[50px] w-[50px] text-blue-400  macbook13:h-[80px] macbook13:w-[80px]" />
              </Link>
              <Link href="https://discord.com/channels/vintage_jab">
                <IoLogoDiscord className="h-[50px] w-[50px] text-blue-400  macbook13:h-[80px] macbook13:w-[80px]" />
              </Link>
            </div>
          </div>
          <motion.div
            className="h-[300px] w-[300px]  macbook13:h-[700px] macbook13:w-[700px]  2xl:h-[600px] 2xl:w-[600px] rounded-sm overflow-hidden"
            initial={{ x: 200 }}
            animate={{ x: 1 }}
            transition={{ duration: 4 }}
          >
            <Image
              src={VINTAGE_JAB}
              height={500}
              width={500}
              className="h-full w-full"
              alt="Avatar"
            />
          </motion.div>
        </div>
      </div>

      {/* Why Zeus Network */}
      <div className="flex flex-col space-y-10 macbook13:space-y-20 mt-[200px] macbook13:mt-[300px]">
        <h1 className="md:text-5xl text-2 font-extrabold macbook13:text-8xl bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
          Why Zeus?
        </h1>
        <p className="pb-20 max-w-4xl macbook13:text-2xl macbook13:max-w-7xl">
          Zeus Network is more than a blockchain platform it’s a revolutionary
          ecosystem redefining DeFi and blockchain interoperability. By bridging
          Bitcoin to Solana, Zeus empowers users with secure, transparent, and
          efficient tools for cross-chain liquidity and decentralized finance.
          Whether through its innovative components, trusted infrastructure, or
          vibrant community, Zeus is shaping the future of finance.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-20   pb-20">
          <div className="flex px-5 flex-col space-y-10 pt-5 pb-20 shadow-lg macbook13:max-w-2xl shadow-white max-w-md justify-center items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden macbook13:w-24 macbook13:h-24">
              <Image
                src="/innovation.png"
                height={500}
                width={500}
                className="h-full w-full"
                alt="Innovation"
              />
            </div>
            <div className="font-extrabold text-xl">Innovation</div>
            <div className="max-w-sm text-sm macbook13:max-w-2xl">
              Zeus integrates cutting-edge tools like APOLLO, ZeusNode, and zBTC
              to create a seamless ecosystem for cross-chain liquidity. With its
              robust ZPL framework, it bridges Bitcoin to Solana, unlocking new
              opportunities in DeFi while maintaining security and stability.
            </div>
          </div>

          <div className="flex px-5 flex-col macbook13:max-w-2xl space-y-10 pt-5 pb-20 shadow-lg shadow-white max-w-md justify-center macbook13:space-y-20  items-center">
            <div className="w-20 h-20 macbook13:w-24 macbook13:h-24 rounded-full overflow-hidden">
              <Image
                src="/transparency.png"
                height={500}
                width={500}
                className="h-full w-full"
                alt="Innovation"
              />
            </div>
            <div className="font-extrabold text-xl macbook13:2xl">
              Transparency
            </div>
            <div className="max-w-sm text-sm macbook13:max-w-2xl">
              ZeusScan ensures every transaction is fully verifiable, keeping
              zBTC pegged 1:1 with Bitcoin and maintaining trust within the
              network. Users can monitor blockchain activity in real-time,
              fostering confidence and accountability.
            </div>
          </div>

          <div className="flex px-5 flex-col space-y-10 pt-5 pb-20 shadow-lg shadow-white max-w-md justify-center items-center macbook13:max-w-2xl">
            <div className="w-20 h-20 rounded-full overflow-hidden macbook13:w-24 macbook13:h-24">
              <Image
                src="/community.png"
                height={500}
                width={500}
                className="h-full w-full"
                alt="Innovation"
              />
            </div>
            <div className="font-extrabold text-xl">Community</div>
            <div className="max-w-sm text-sm macbook13:max-w-2xl">
              The Zeus Discord is a hub for collaboration, ideas, and
              engagement. Whether contributing memes, sharing Twitter threads,
              or earning roles, the community makes Zeus more than a
              network—it’s a shared mission to advance DeFi together.
            </div>
          </div>

          <div className="flex  px-5 flex-col space-y-10 macbook13:space-y-20 pt-5 pb-20 shadow-lg shadow-white max-w-md macbook13:max-w-2xl justify-center items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden macbook13:w-24 macbook13:h-24">
              <Image
                src="/security.png"
                height={500}
                width={500}
                className="h-full w-full"
                alt="Innovation"
              />
            </div>
            <div className="font-extrabold text-xl">
              Efficiency and Security
            </div>
            <div className="max-w-sm text-sm macbook13:max-w-2xl">
              By leveraging Solana’s high-speed blockchain, Zeus ensures fast,
              cost-effective transactions. Its decentralized infrastructure
              prioritizes security, allowing users to interact trustlessly
              without traditional bridges.
            </div>
          </div>

          {/* Repeat or include more cards */}
        </div>

        <div
          className="flex flex-col 
         space-y-10 mt-[200px] pb-[200px] macbook13:pt-[150px] macbook13:pb-[300px]"
        >
          <h1 className="md:text-5xl text-2xl macbook13:text-7xl font-extrabold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
            Contributions
          </h1>
          <h2 className="md:text-3xl macbook13:text-5xl text-xl font-extrabold mt-20 mb-20 bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
            Roles
          </h2>

          <div className="pb-20 bg-gray-900 macbook13:pb-28 ">
            <div className="bg-[#4B3621] h-[200px] macbook13:h-[300px] relative">
              <div className="absolute h-40  w-40 macbook13:w-52 macbook13:h-52 rounded-full bg-blue-700 border-[6px] border-black left-10 -bottom-14">
                <div className="bg-yellow-400 h-full w-full rounded-full relative ">
                  <Image
                    src="/VINTAGE.jpg"
                    height={500}
                    width={500}
                    className="h-full w-full rounded-full"
                    alt="Innovation"
                  />
                  <div className="absolute  w-12 h-12 -right-0 rounded-full border-black border-8  -bottom-0 border-10 bg-green-600 z-20"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-20 space-y-6 macbook13:space-y-12 px-14">
              <div className="flex flex-col space-y-2">
                <div className="font-bold text-2xl macbook13:text-3xl">
                  VINTAGE_JAB
                </div>
                <div className="flex space-x-6">
                  <span className="macbook13:text-xl">vintage_jab</span>{" "}
                  <span className="text-black bg-green-500 rounded-full macbook13:text-xl h-5 w-5 macbook13:h-6 macbook13:w-6 text-center">
                    #
                  </span>
                </div>
              </div>
              <div>
                <div className="max-w-md macbook13:max-w-2xl">
                  {showFullBio ? (
                    <div className="flex flex-col space-y-2 macbook13:space-y-3  macbook13:text-xl">
                      <p>
                        Crypto enthusiats i am a guru in all works of life . A
                        workaholic you all need me on your team
                      </p>
                      <p>
                        Web developer, mod - lunch protocol mod - LZY YUTES
                        commander-NFT GURUS
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-2 macbook13:text-xl">
                      Crypto enthusiats i am a guru in all works of life . A
                      workaholic you all need me on your team
                    </div>
                  )}
                </div>
              </div>
              <p
                className="text-sm text-gray-400 cursor-pointer tracking-widest macbook13:text-lg"
                onClick={toggleBio}
              >
                {showFullBio ? "View Less" : "View Full Bio"}
              </p>
              <div className="flex flex-col space-y-1">
                <div className="flex space-x-2 ">
                  <div className="flex space-x-2 items-center text-sm bg-gray-800 px-3 py-1 macbook13:px-4 macbook13:py-2 macbook13:space-x-4 macbook13:text-xl">
                    <span className="h-3 w-3 macbook13:h-5 macbook13:w-5 rounded-full bg-red-400 "></span>
                    <span className="text-gray-300 ">Zeus sage</span>
                  </div>
                  <div className="flex space-x-2 items-center text-sm bg-gray-800 px-3 py-1 macbook13:px-4 macbook13:py-2 macbook13:space-x-4 macbook13:text-xl">
                    <span className="h-3 w-3 macbook13:h-5 macbook13:w-5 rounded-full bg-pink-400 "></span>
                    <span className="text-gray-300 ">Apollonian</span>
                  </div>
                </div>
                <div className="flex space-x-2 ">
                  <div className="flex space-x-2 items-center text-sm bg-gray-800 px-3 py-1 macbook13:px-4 macbook13:py-2 macbook13:space-x-4 macbook13:text-xl">
                    <span className="h-3 w-3 macbook13:h-5 macbook13:w-5 rounded-full bg-green-700 "></span>
                    <span className="text-gray-300 ">Alpha Olympians</span>
                  </div>
                  <div className="flex space-x-2 items-center text-sm bg-gray-800 px-3 py-1 macbook13:px-4 macbook13:py-2 macbook13:space-x-4 macbook13:text-xl">
                    <span className="h-3 w-3 macbook13:h-5 macbook13:w-5 rounded-full bg-green-700 "></span>
                    <span className="text-gray-300 ">Olympians</span>
                  </div>
                </div>
                <div className="flex space-x-2 ">
                  <div className="flex space-x-2 items-center text-sm bg-gray-800 px-3 py-1 macbook13:px-4 macbook13:py-2 macbook13:space-x-4 macbook13:text-xl">
                    <span className="h-3 w-3 macbook13:h-5 macbook13:w-5 rounded-full bg-white "></span>
                    <span className="text-gray-300 ">Artist</span>
                  </div>
                  <div className="flex space-x-2 items-center text-sm bg-gray-800 px-3 py-1 macbook13:px-4 macbook13:py-2 macbook13:space-x-4 macbook13:text-xl">
                    <span className="h-3 w-3 macbook13:h-5 macbook13:w-5 rounded-full bg-white "></span>
                    <span className="text-gray-300 ">Writer</span>
                  </div>
                  <div className="flex space-x-2 items-center text-sm bg-gray-800 px-3 py-1 macbook13:px-4 macbook13:py-2 macbook13:space-x-4 macbook13:text-xl">
                    <span className="h-3 w-3 macbook13:h-5 macbook13:w-5 rounded-full bg-white "></span>
                    <span className="text-gray-300 ">Poker</span>
                  </div>
                </div>
                <div className="flex space-x-2 ">
                  <div className="flex space-x-2 items-center text-sm bg-gray-800 px-3 py-1 macbook13:px-4 macbook13:py-2 macbook13:space-x-4 macbook13:text-xl">
                    <span className="h-3 w-3 macbook13:h-5 macbook13:w-5 rounded-full bg-white "></span>
                    <span className="text-gray-300 ">Quiz</span>
                  </div>
                  <div className="flex space-x-2 items-center text-sm bg-gray-800 px-3 py-1 macbook13:px-4 macbook13:py-2 macbook13:space-x-4 macbook13:text-xl">
                    <GrFormPrevious className="macbook13:h-6 macbook13:w-6 " />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="md:text-3xl text-xl  font-extrabold pt-20 mb-20 macbook13:pb-8 bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent macbook13:text-5xl">
            Notable Threads
          </h2>

          <div className="flex flex-col space-y-3 bg-gray-800 p-3 md:h-[450px] h-[500px] macbook13:h-[800px] overflow-auto">
            {Threads.map((thread) => {
              return (
                <Link href={thread.link} key={thread.id}>
                  <div
                    key={thread.id}
                    className="flex cursor-pointer space-x-5 bg-white"
                  >
                    <div className="h-20 w-20 macbook13:h-40 macbook13:w-40">
                      <Image
                        src="/ZeusLogo.jpeg"
                        height={500}
                        width={500}
                        className="h-full w-full"
                        alt="Innovation"
                      />
                    </div>

                    <div className="flex flex-col text-black pr-3 w-full  py-3">
                      <div className="flex space-x-4 ">
                        <span className="md:text-sm text-[10px] macbook13:text-2xl font-bold">
                          [Twitter]
                        </span>
                        <div className="md:text-sm text-[10px] font-bold macbook13:text-2xl ">
                          {thread.title}
                        </div>
                      </div>
                      <div className="text-gray-500 md:text-sm macbook13:text-2xl text-[10px] flex justify-between relative">
                        <span>By Vintage_jab</span>
                        <div className="font-bold macbook13:text-2xl  text-gray-400 md:text-md text-[10px]">
                          {thread.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <h2 className="md:text-3xl text-xl font-extrabold pt-52  mb-40 macbook13:pb-10 bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent macbook13:text-5xl">
            Creative works
          </h2>
          <div className="flex overflow-hidden hide-scrollbar">
            <div className="flex animate-scroll space-x-1 macbook13:space-x-2">
              {memes.map((mem) => {
                return (
                  <div
                    key={mem.id}
                    className="h-[300px] w-[280px] macbook13:h-[600px] macbook13:w-[580px] flex-shrink-0"
                  >
                    <Image
                      src={mem.image}
                      height={500}
                      width={500}
                      className="h-full w-full"
                      alt="Innovation"
                    />
                  </div>
                );
              })}

              {/* Duplicate for looping */}
            </div>
          </div>

          <h2 className="md:text-3xl text-xl font-extrabold pt-40 macbook13:pt-60  mb-40 bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent macbook13:text-5xl">
            The future is now
          </h2>

          <div className="flex flex-col space-y-10">
            <div className="flex justify-between">
              <motion.div
                className="h-[260px] w-[280px] macbook13:h-[400px] macbook13:w-[480px]"
                initial={{ x: -50 }}
                whileInView={{ x: 1 }}
                transition={{ duration: 2 }} // Adjust based on in-view status
              >
                <Image
                  src="/ZeusLogo.jpeg"
                  height={500}
                  width={500}
                  className="h-full w-full"
                  alt="Innovation"
                />
              </motion.div>

              <motion.div
                className="flex flex-col justify-between bg-gray-900 p-3"
                initial={{ x: 50 }}
                whileInView={{ x: 1 }}
                transition={{ duration: 2 }}
              >
                <h1 className="font-extrabold text-lg macbook13:text-2xl  text-pink-300">
                  Zeus network
                </h1>
                <p className="max-w-sm macbook13:max-w-2xl macbook13:text-xl ">
                  Zeus Network bridges Bitcoin to Solana, offering secure and
                  efficient tools like zBTC and ZeusNode for seamless
                  cross-chain liquidity and DeFi innovation.
                </p>
                <Link href="https://tr.ee/P2l8pTeaGn">
                  <div className="h-5 cursor-pointer">
                    <FaExternalLinkAlt className="h-full w-10  text-pink-300 font-extrabold" />
                  </div>
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-between">
              <motion.div
                className="h-[260px] w-[280px] macbook13:h-[400px] macbook13:w-[480px]"
                initial={{ x: -50 }}
                whileInView={{ x: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <Image
                  src="/Apollo.jpg"
                  height={500}
                  width={500}
                  className="h-full w-full"
                  alt="Innovation"
                />
              </motion.div>

              <motion.div
                className="flex flex-col justify-between bg-gray-900 p-3"
                initial={{ x: 50 }}
                whileInView={{ x: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <h1 className="font-extrabold text-lg text-pink-300 macbook13:text-2xl">
                  Apollo
                </h1>
                <p className="max-w-sm macbook13:max-w-2xl macbook13:text-xl">
                  Apollo is Zeus Network’s advanced liquidity aggregator,
                  optimizing cross-chain transactions for speed,
                  cost-efficiency, and seamless DeFi interactions.
                </p>

                <Link href="https://apollobyzeus.app/">
                  <div className="h-5 cursor-pointer">
                    <FaExternalLinkAlt className="h-full w-10 text-pink-300 font-extrabold" />
                  </div>
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-between ">
              <motion.div
                className="h-[260px] w-[280px] macbook13:h-[400px] macbook13:w-[480px]"
                initial={{ x: -50 }}
                whileInView={{ x: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              >
                <Image
                  src="/scan.jpg"
                  height={500}
                  width={500}
                  className="h-full w-full"
                  alt="Innovation"
                />
              </motion.div>

              <motion.div
                className="flex flex-col justify-between bg-gray-900 p-3"
                initial={{ x: 50 }}
                whileInView={{ x: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              >
                <h1 className="font-extrabold text-lg text-pink-300 macbook13:text-2xl">
                  Zeus Scan
                </h1>
                <p className="max-w-sm  macbook13:max-w-2xl macbook13:text-xl">
                  Zeus Network bridges Bitcoin to Solana, offering secure and
                  efficient tools like zBTC and ZeusNode for seamless
                  cross-chain liquidity and DeFi innovation.
                </p>

                <Link href="https://zeusscan.io/">
                  <div className="h-5 cursor-pointer">
                    <FaExternalLinkAlt className="h-full w-10 text-pink-300 font-extrabold" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
