import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IT 밸런스 게임</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@isValidUserId" />
        <meta name="twitter:title" content="IT 밸런스 게임" />
        <meta name="twitter:description" content="개발자 밸런스 게임!" />
        <meta
          name="twitter:image"
          content="https://app.itquiz.co.kr/common/dev-balance.png"
        />

        <meta property="og:url" content="https://app.itquiz.co.kr/" />
        <meta property="og:title" content="IT 밸런스 게임" />
        <meta property="og:description" content="개발자 밸런스 게임!" />
        <meta
          property="og:image"
          content="https://app.itquiz.co.kr/common/dev-balance.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
