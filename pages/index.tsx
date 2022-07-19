import Head from "next/head";
import { useEffect } from "react";
import Colaborators from "../components/Colaborators";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Importants from "../components/Importants";
import Article from "../components/Articles";


import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ posts }: any) {
  useEffect(() => {
    document.body.classList.add("scroll-smooth");
  });
  return (
    <div>
      <Head>
        <title>infoConf</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Hero />
      <Importants />
      <Colaborators />
      <Article posts={posts} />
      <FAQ />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const root = process.cwd();

  const files = fs.readdirSync(path.join(root, "data"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx/, "");
    const read = fs.readFileSync(path.join(root, "data", file));
    const { data: frontMatter } = matter(read);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
