import Image from "next/image";
import image2 from "public/image2.jpg";

export default function About() {
  return (
    <div style={{ height: "1000px", width: "1700px" }}>
      <Image src={image2} alt="" style={{ width: "100%", height: "80%" }} />

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
            padding: "50px",
          }}
        >
          The New Education
        </div>
      </div>
    </div>
  );
}
