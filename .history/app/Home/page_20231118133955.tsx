// Home.tsx

import React from "react";
import Navbar from "./page";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* 渲染顶部导航栏 */}
      <div className="container mx-auto">
        {/* 这里是 Home 页面的内容 */}
        <h1>Welcome to Home Page</h1>
        {/* ... */}
      </div>
    </div>
  );
};

export default Home;
