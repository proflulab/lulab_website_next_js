/* eslint-disable @next/next/no-img-element */
"use client";

const End: React.FC = () => {
  return (
    <div>
      <div style={{ position: "absolute" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
          }}
        >
          <img src="/logo.png" alt="" height="50" width="50" />
          <p
            style={{
              color: "white",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            Lu Lab
          </p>
        </div>
        <div
          style={{
            position: "relative",
            top: "20px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              color: "grey",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            CONTACT INFO
          </div>
          <div
            style={{
              color: "grey",
              fontSize: "18px",
              fontWeight: "400",
              marginLeft: "2px",
              textAlign: "left",
            }}
          >
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
