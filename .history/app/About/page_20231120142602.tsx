import Image from "next/image";
import image2 from "public/image2.jpg";
import LuXiangqian from "public/LuXiangqian.png"; // replace with your image path

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
          top: "82%",
          paddingBottom: "50px", // Add padding here to create space
        }}
      >
        <h1
          style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Welcome From the Head of Lab
        </h1>

        {/* Adding a gray rectangle */}
        <div
          style={{
            height: "300px",
            width: "55%",
            margin: "0 auto",
            backgroundColor: "#DDDDDD",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "10px",
          }}
        >
          <Image
            src={LuXiangqian}
            alt=""
            style={{ height: "280px", width: "260px" }} // Set dimensions of the image
          />
          <p
            style={{
              color: "black",
              fontSize: "12px",
              fontWeight: "normal",
              marginLeft: "20px",
              textAlign: "left",
            }}
          >
            So much has been accomplished since Lu Lab was founded in 1994. Our
            lab has grown in such tremendous ways, but I am so proud that our
            mission and our unique character have remained firmly in place.
            <br />I invite you to explore our website, discover more about our
            worldwide learning community, and see what makes the Lu Lab
            experience so extraordinary. <br />
            -Lewis X. Lu, Ph.D.
          </p>
        </div>
      </div>
    </div>
  );
}
