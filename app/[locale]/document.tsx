import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="UTF-8" />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="LuLab 陆向谦实验室的官方网站" />
          <meta name="keywords" content="LuLab 陆向谦实验室" />
          <meta property="og:title" content="LuLab | 陆向谦实验室官方网站" />
          <meta
            property="og:description"
            content="LuLab 是陆向谦实验室的官方网站。"
          />
          <meta property="og:image" content="public/images/logo.svg" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
