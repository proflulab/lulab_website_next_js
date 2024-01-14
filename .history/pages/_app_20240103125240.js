// 您需要在 pages/_app.js 中使用 next-themes 的 ThemeProvider 来包装您的应用程序
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
