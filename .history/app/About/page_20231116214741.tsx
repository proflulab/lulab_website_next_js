import Image from "next/image";
import image2 from "public/image2.jpg";

export default function About() {
  return (
    <div>
      <div style={{ height: "400px", width: "800px" }}>
        <Image src={image2} alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
