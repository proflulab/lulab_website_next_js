// pages/_app.js
import { NextUIProvider } from "@nextui-org/react";
import App from "@/app/title/page";
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <App>
        <Component {...pageProps} />
      </App>
    </NextUIProvider>
  );
}

export default MyApp;
