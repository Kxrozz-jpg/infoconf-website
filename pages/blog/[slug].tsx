import fs from "fs";
import matter from "gray-matter";
import path from "path";
import md from "markdown-it";
import Head from "next/head";

import Layout from "../../components/Layout";
import Details from "../../components/Details";

const root = process.cwd();

export default function BlogPost({ frontMatter, content }: any) {
  console.log(frontMatter);
  console.log(content);
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <h1 className="mb-4 text-5xl font-extrabold">{frontMatter.title}</h1>
      <Details details={frontMatter} />
      <article
        className="prose prose-slate font-sans Article"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(root, "data"));
  const paths = files.map((file) => ({
    params: {
      slug: file.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

/* @ts-ignore */
export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(path.join(root, "data", `${slug}.mdx`));
  const { data: frontMatter, content } = matter(file);

  return {
    props: {
      frontMatter,
      content,
    },
  };
}
