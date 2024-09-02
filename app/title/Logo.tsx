// 首先，确保你从 'next/image' 正确导入了 Image 组件
import React from "react";
import Image from "next/image"; // 这里导入 Image 组件

export const Logo = () => (
  <Image src="/logo.png" alt="Logo" width={48} height={48} />
);

export default Logo;
