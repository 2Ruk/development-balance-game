import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IT 밸런스 게임</title>
        <meta property="og:title" content="IT 밸런스 게임" />
        <meta property="og:description" content="개발자 밸런스 게임!" />
        <meta property="og:url" content="https://app.itquiz.co.kr/" />
        <meta
          property="og:image"
          content="https://app.itquiz.co.kr/common/dev-balance.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
