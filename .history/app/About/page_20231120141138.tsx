import Image from "next/image";
import image2 from "public/image2.jpg";

export default function About() {
  return (
    <div style={{ height: "1000px", width: "1700px", position: "relative" }}>
      <Image src={image2} alt="" style={{ width: "100%", height: "80%" }} />

      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "70px",
          fontWeight: "bold",
        }}
      >
        The New Education
      </div>
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "50px",
          fontWeight: "normal",
        }}
      >
        in AI age
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "40px",
          fontWeight: "normal",
        }}
      >
        All work and no play makes Jack a dull boy
      </div>

      <div
        style={{
          height: "800px",
          width: "100%",
          backgroundColor: "white",
          textAlign: "center",
          position: "absolute",
          top: "85%",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          Welcome From the Head of Lab
        </h1>

        {/* Adding a gray rectangle */}
        <div
          style={{
            height: "300px",
            width: "60%",
            top: "100%",
            margin: "0 auto",
            backgroundColor: "#DDDDDD",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
            Text on Gray Rectangle
          </p>
        </div>
      </div>
    </div>
  );
}
