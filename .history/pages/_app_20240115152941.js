// pages/_app.js
import { NextUIProvider } from "@nextui-org/react";
import App from "@/app/title/page";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // 在页面导航时执行你希望重新渲染的操作
    // 例如，可以在这里触发 App 组件的刷新逻辑
    // 也可以在这里执行其他全局的操作
    console.log("Page is navigating");
  }, [router.pathname]);

  return (
    <NextUIProvider>
      <App>
        <Component {...pageProps} />
      </App>
    </NextUIProvider>
  );
}

export default MyApp;
