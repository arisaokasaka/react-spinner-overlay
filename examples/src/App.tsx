import React from "react";
import { CircleSpinner } from "../../src/components/CircleSpinner";
import "../../src/index.css";

function App() {
  return (
    <div>
      <header
        style={{
          position: "sticky",
          top: "0",
          left: "0",
          width: "100%",
          color: "#fff",
          fontSize: "20px",
          padding: "12px 0 12px 24px",
          letterSpacing: "0.5px",
          fontWeight: "bolder",
          background:
            "linear-gradient(90deg, rgba(63,205,152,1) 0%, rgba(46,197,199,1) 73%)",
        }}
      >
        React Spinner Overlay
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        <CircleSpinner loading={true} />
      </div>
    </div>
  );
}

export default App;
