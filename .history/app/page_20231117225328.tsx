import Image from "next/image";
import logo from "public/logo.png";

export default function Home() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="flex items-center">
            <Image src={logo} alt="Lu Lab" width={50} height={50} />
            <span className="ml-2 text-lg">Lu Lab</span>
          </div>
        </div>

        <div className="flex-grow text-center">
          <ul className="flex justify-center space-x-4">
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
                href="/about"
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
