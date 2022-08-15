import Footer from "@components/footer";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

import { Hero } from "./hero";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="w-full h-[calc(100vh-80px)] text-center flex flex-col">
        {mounted ? <Hero /> : <></>}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
