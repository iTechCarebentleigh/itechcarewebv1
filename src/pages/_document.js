import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link
  href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700,1&display=swap"
  rel="stylesheet"
/>

      </Head>
      <body className="bg-slate-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
