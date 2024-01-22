/* eslint-disable @next/next/no-img-element */
"use client";

const End: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      <div style={{ textAlign: "left" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="/logo.png" alt="" height="50" width="50" />
          <p
            style={{
              marginTop: "5px",
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
              marginLeft: "15px",
            }}
          >
            Lu Lab
          </p>
        </div>
        <div
          style={{
            marginTop: "20px",
            color: "grey",
            fontSize: "18px",
            fontWeight: "400",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            CONTACT INFO
          </div>
          <div>
            <br />
            admin@lulabs.org
            <br />
            <br />
            East Brokaw Road 310-F San Jose, CA 95112 USA <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
