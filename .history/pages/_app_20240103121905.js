import { NextUIProvider, darkTheme } from "@nextui-org/react";
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
