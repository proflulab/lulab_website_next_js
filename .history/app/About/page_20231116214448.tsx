import Image from "next/image";
import image2 from "public/image2.jpg";
export default function About() {
  return (
    <div>
      <Image src={image2} alt="" width={150} height={2000} />
    </div>
  );
}
