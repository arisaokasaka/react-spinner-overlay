import React, { useState } from "react";
import { CircleSpinner } from "../../src/components/CircleSpinner";
import { CircleSpinner2 } from "../../src/components/CircleSpinner2";
import { Overlay } from "../../src/components/Overlay";
import { SimpleSpinner } from "../../src/components/SimpleSpinner";
import "../../src/index.css";
import "./index.css";

function App() {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  function SpinnerContainer(Spinner: JSX.Element, title: string): JSX.Element {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "180px",
          border: "1px solid rgb(212 228 228)",
          padding: "24px 16px",
          margin: "16px",
        }}
      >
        {Spinner}
        <code style={{ marginTop: "16px", fontSize: "12px" }}>{title}</code>
      </div>
    );
  }

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
        <p style={{ marginTop: "48px", fontSize: "20px" }}>
          Of course, You can customize{" "}
          <span style={{ color: "#00ced1", fontWeight: "bolder" }}>size</span>{" "}
          and{" "}
          <span style={{ color: "#00ced1", fontWeight: "bolder" }}>color</span>!
        </p>
        <code
          style={{
            marginTop: "24px",
            padding: "8px 16px",
            backgroundColor: "rgb(212 228 228)",
            fontSize: "14px",
          }}
        >
          $ yarn add -D react-spinner-overlay
        </code>
        <code
          style={{
            marginTop: "6px",
            padding: "8px 16px",
            backgroundColor: "rgb(212 228 228)",
            fontSize: "14px",
          }}
        >
          $ npm install --save-dev react-spinner-overlay
        </code>
        <button
          style={{
            border: "none",
            backgroundColor: "#00ced1",
            color: "#fff",
            fontWeight: "bolder",
            padding: "12px",
            marginTop: "52px",
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

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {SpinnerContainer(<CircleSpinner />, "<CircleSpinner />")}
          {SpinnerContainer(<CircleSpinner2 />, "<CircleSpinner2 />")}
          {SpinnerContainer(<SimpleSpinner />, "<SimpleSpinner />")}
        </div>
      </div>
      <Overlay loading={showOverlay}>
        <>
          <CircleSpinner />
          <p>Wait two seconds.</p>
        </>
      </Overlay>
    </div>
  );
}

export default App;
