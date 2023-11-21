import Image from "next/image";
import image2 from "public/image2.jpg";
import Layout from "./page.tsx";
export default function About() {
  return (
    <Layout>
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
      </div>
    </Layout>
  );
}
