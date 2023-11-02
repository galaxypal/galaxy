import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";
import Header from "@/components/Header";
import HomeAnimationBanner from "@/components/HomeAnimationBanner";
import TabLetestNews from "@/components/TabLetestNews";
import NftSection from "@/components/NftSection";
import StarrySky from "@/components/SootingStar";
import MintyLatestNews from "@/components/MintyLatestNews";
import FAQ from "@/components/FAQ";
import MissionStatementOne from "@/components/MissionStatementOne";
import MissionStatementTwo from "@/components/MissionStatementTwo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Head>
        <title>Galaxy Pals</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${inter.className}`}>
        <Header setValue={setValue} />
        <HomeAnimationBanner />
        {/* <TabLetestNews value={value} setValue={setValue} /> */}
        <MissionStatementOne />
        <MissionStatementTwo />
        {/* <NftSection /> */}
        <StarrySky />
        <MintyLatestNews />
        <FAQ />
      </main>
    </>
  );
}
