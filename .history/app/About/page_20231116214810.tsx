import Image from "next/image";
import image2 from "public/image2.jpg";

export default function About() {
  return (
    <div>
      <div style={{ height: "1000px", width: "1000px" }}>
        <Image src={image2} alt="" />
      </div>
    </div>
  );
}
