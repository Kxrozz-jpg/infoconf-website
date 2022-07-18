import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <section className="p-10 mx-auto max-w-prose">{children}</section>
      <Footer />
    </>
  );
}
