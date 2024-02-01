import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Head>
        <title>ID Staking</title>
      </Head>
      <Navbar />
      
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
