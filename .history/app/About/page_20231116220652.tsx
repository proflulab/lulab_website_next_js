import Image from "next/image";
import image2 from "public/image2.jpg";

export default function About() {
  return (
    <div style={{ position: "relative", height: "1000px", width: "1700px" }}>
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: "100%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image src={image2} alt="" width={1700} height={1000} />
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "white",
            fontSize: "24px",
          }}
        >
          Your Text Here
        </div>
      </div>
    </div>
  );
}
