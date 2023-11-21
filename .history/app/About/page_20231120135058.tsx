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
          backgroundColor: "white",
          position: "absolute",
          top: "30%",
          left: "50%",

          color: "black",
          fontSize: "70px",
          fontWeight: "bold",
        }}
      >
        Welcome From the Head of Lab
        {/* <p>This is the new section content...</p> */}
      </div>
    </div>
  );
}
