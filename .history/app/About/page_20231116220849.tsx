import Image from "next/image";
import image2 from "public/image2.jpg";

export default function About() {
  return (
    <div style={{ position: "relative", width: "1700px", height: "1000px" }}>
      <Image src={image2} alt="" width={1700} height={1000} />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
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
    </div>
  );
}
