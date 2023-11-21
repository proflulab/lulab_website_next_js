import React from "react";
import Navbar from "./Navbar"; // 这里导入你的导航栏组件

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* 这里可以添加其他全局组件或页脚等 */}
    </>
  );
};

export default Layout;
