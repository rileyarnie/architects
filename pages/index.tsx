import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Website of Architects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
