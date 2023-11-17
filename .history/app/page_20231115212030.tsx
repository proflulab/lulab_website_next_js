import Image from "public/logo.png";
function Home() {
  return (
    <div>
      {/* 以指定宽高加载图片 */}
      <Image
        src="/logo.png" // 图片路径
        alt="Logo" // 图片描述
        width={200} // 图片宽度
        height={100} // 图片高度
      />
    </div>
  );
}

export default function Home() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src="public/logo.png" />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white">
            {/* Hamburger Menu Icon */}
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Clubs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
