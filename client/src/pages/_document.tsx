import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
