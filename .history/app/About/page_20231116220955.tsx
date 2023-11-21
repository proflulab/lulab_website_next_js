import Image from "next/image";
import image2 from "public/image2.jpg";

export default function About() {
  return (
    <div style={{ height: "1000px", width: "1700px" }}>
      <Image src={image2} alt="" style={{ width: "100%", height: "80%" }} />

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "10px",
        }}
      >
        Your Text Here
      </div>
    </div>
  );
}
