import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Colaborators from "../components/Colaborators";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Importants from "../components/Importants";

const Home: NextPage = () => {
  useEffect(() => {
    document.body.classList.add("scroll-smooth")
  })
  return (
    <div>
      <Head>
        <title>infoConf</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Hero />
      <Importants />
      <Colaborators />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
