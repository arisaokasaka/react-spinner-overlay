import React, { useState } from "react";
import { CircleSpinner } from "../../src/components/CircleSpinner";
import { Overlay } from "../../src/components/Overlay";
import "../../src/index.css";
import "./index.css";

function App() {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <div>
      <header
        style={{
          position: "sticky",
          top: "0",
          left: "0",
          right: "0",
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
          alignItems: "center",
          flexDirection: "column",
          marginTop: "24px",
          marginBottom: "24px",
          zIndex: -100,
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "#00ced1",
            color: "#fff",
            fontWeight: "bolder",
            padding: "12px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowOverlay(true);
            setTimeout(() => setShowOverlay(false), 2000);
          }}
        >
          Show Overlay
        </button>
        <CircleSpinner loading={true} />
        <Overlay loading={showOverlay}>
          <>
            <CircleSpinner />
            <p>Wait two seconds.</p>
          </>
        </Overlay>
      </div>
    </div>
  );
}

export default App;
