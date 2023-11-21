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
      {/* Existing text... */}

      {/* New text */}
      <div
        style={{
          position: "absolute",
          top: "90%" /* Adjust the top position as needed */,
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "24px" /* Set the font size */,
          fontWeight: "normal",
          textAlign: "center" /* Center the text */,
          width: "80%" /* Set the width of the text */,
        }}
      >
        Additional text below the image
      </div>
    </div>
  );
}
