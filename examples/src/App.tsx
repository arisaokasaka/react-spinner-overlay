import React, { useState } from "react";
import {
  CircleSpinner,
  CircleSpinnerOverlay,
} from "../../src/components/CircleSpinner";
import {
  DartsSpinner,
  DartsSpinnerOverlay,
} from "../../src/components/DartsSpinner";
import { LineLoader, LineLoaderOverlay } from "../../src/components/LineLoader";
import {
  SimpleSpinner,
  SimpleSpinnerOverlay,
} from "../../src/components/SimpleSpinner";
import "../../src/index.css";
import "./index.css";
import {
  FerrisWheelSpinner,
  FerrisWheelSpinnerOverlay,
} from "../../src/components/FerrisWheelSpinner";
import {
  WindmillSpinner,
  WindmillSpinnerOverlay,
} from "../../src/components/WindmillSpinner";
import {
  BounceLetterLoader,
  BounceLetterLoaderOverlay,
} from "../../src/components/BounceLetterLoader";
import { DotLoader, DotLoaderOverlay } from "../../src/components/DotLoader";
import {
  RouletteSpinner,
  RouletteSpinnerOverlay,
} from "../../src/components/RouletteSpinner";

function App() {
  const [overlay, setOverlay] = useState({
    circleSpinner: false,
    lineLoader: false,
    simpleSpinner: false,
    dartsSpinner: false,
    ferrisWheelSpinner: false,
    rouletteSpinner: false,
    windmillSpinner: false,
    dotLoader: false,
    bounceLetterLoader: false,
  });

  const SectionContainer: React.FC<{
    title: string;
    setShowOverlay: (nextShowStatus: boolean) => void;
  }> = ({ title, setShowOverlay, children }) => {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 8px",
          margin: "12px",
          textAlign: "center",
          border: "1px solid rgb(212 228 228)",
          width: "280px",
          minWidth: "280px",
          minHeight: "112px",
        }}
      >
        <code style={{ fontSize: "14px", marginBottom: "24px" }}>{title}</code>
        {children}
        <button
          style={{
            border: "none",
            backgroundColor: "#00ced1",
            color: "#fff",
            fontWeight: "bolder",
            padding: "4px 6px",
            marginTop: "16px",
            fontSize: "12px",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowOverlay(true);
            setTimeout(() => setShowOverlay(false), 2000);
          }}
        >
          Overlay
        </button>
      </section>
    );
  };

  return (
    <div>
      <header
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
          fontSize: "20px",
          padding: "12px 24px",
          letterSpacing: "0.5px",
          fontWeight: "bolder",
          background:
            "linear-gradient(90deg, rgba(63,205,152,1) 0%, rgba(46,197,199,1) 73%)",
          zIndex: 10,
        }}
      >
        <span>React Spinner Overlay</span>
        <a
          style={{
            fontSize: "14px",
            color: "#fff",
            fontWeight: "normal",
            textDecoration: "none",
          }}
          href="https://github.com/arisaokasaka/react-spinner-overlay"
        >
          GitHub
        </a>
      </header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "24px",
          padding: "16px",
          zIndex: -100,
        }}
      >
        <p style={{ marginTop: "48px", fontSize: "20px", textAlign: "center" }}>
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

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "40px",
            maxWidth: "1200px",
          }}
        >
          <SectionContainer
            title={"<CircleSpinner />"}
            setShowOverlay={(nextShowStatus: boolean) =>
              setOverlay({ ...overlay, circleSpinner: nextShowStatus })
            }
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CircleSpinner />
                <p style={{ marginTop: "16px", fontSize: "12px" }}>default</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CircleSpinner outerBorderOpacity={0.3} outerBorderWidth={8} />
                <p style={{ marginTop: "16px", fontSize: "12px" }}>
                  outerBorderOpacity={0.3}
                  <br />
                  outerBorderWidth={8}
                </p>
              </div>
            </div>
            <CircleSpinnerOverlay
              loading={overlay.circleSpinner}
              message={
                <p style={{ marginTop: "12px" }}>
                  If you want, you can insert message!
                </p>
              }
            />
          </SectionContainer>

          <SectionContainer
            title={"<LineLoader />"}
            setShowOverlay={(nextShowStatus: boolean) =>
              setOverlay({ ...overlay, lineLoader: nextShowStatus })
            }
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "60px",
                  }}
                >
                  <LineLoader />
                </div>
                <p style={{ marginTop: "16px", fontSize: "12px" }}>default</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "60px",
                  }}
                >
                  <LineLoader bgOpacity={0} />
                </div>
                <p style={{ marginTop: "16px", fontSize: "12px" }}>
                  bgOpacity={0}
                </p>
              </div>
            </div>
            <LineLoaderOverlay
              loading={overlay.lineLoader}
              message={
                <p style={{ marginTop: "12px" }}>
                  If you want, you can insert message!
                </p>
              }
            />
          </SectionContainer>

          <SectionContainer
            title={"<SimpleSpinner />"}
            setShowOverlay={(nextShowStatus: boolean) =>
              setOverlay({ ...overlay, simpleSpinner: nextShowStatus })
            }
          >
            <SimpleSpinner />
            <SimpleSpinnerOverlay
              loading={overlay.simpleSpinner}
              message={
                <p style={{ marginTop: "12px" }}>
                  If you want, you can insert message!
                </p>
              }
            />
          </SectionContainer>

          <SectionContainer
            title={"<FerrisWheelSpinner />"}
            setShowOverlay={(nextShowStatus: boolean) =>
              setOverlay({ ...overlay, ferrisWheelSpinner: nextShowStatus })
            }
          >
            <FerrisWheelSpinner />
            <FerrisWheelSpinnerOverlay
              loading={overlay.ferrisWheelSpinner}
              message={
                <p style={{ marginTop: "12px" }}>
                  If you want, you can insert message!
                </p>
              }
            />
          </SectionContainer>

          <SectionContainer
            title={"<RouletteSpinner />"}
            setShowOverlay={(nextShowStatus: boolean) =>
              setOverlay({ ...overlay, rouletteSpinner: nextShowStatus })
            }
          >
            <RouletteSpinner />
            <RouletteSpinnerOverlay
              loading={overlay.rouletteSpinner}
              message={
                <p style={{ marginTop: "12px" }}>
                  If you want, you can insert message!
                </p>
              }
            />
          </SectionContainer>

          <SectionContainer
            title={"<WindmillSpinner />"}
            setShowOverlay={(nextShowStatus: boolean) =>
              setOverlay({ ...overlay, windmillSpinner: nextShowStatus })
            }
          >
            <WindmillSpinner />
            <WindmillSpinnerOverlay
              loading={overlay.windmillSpinner}
              message={
                <p style={{ marginTop: "12px" }}>
                  If you want, you can insert message!
                </p>
              }
            />
          </SectionContainer>

          <SectionContainer
            title={"<DartsSpinner />"}
            setShowOverlay={(nextShowStatus: boolean) =>
              setOverlay({ ...overlay, dartsSpinner: nextShowStatus })
            }
          >
            <DartsSpinner />
            <DartsSpinnerOverlay
              loading={overlay.dartsSpinner}
              message={
                <p style={{ marginTop: "12px" }}>
                  If you want, you can insert message!
                </p>
              }
            />
          </SectionContainer>

          <SectionContainer
            title={"<DotLoader />"}
            setShowOverlay={(nextShowStatus: boolean) =>
              setOverlay({ ...overlay, dotLoader: nextShowStatus })
            }
          >
            <DotLoader />
            <DotLoaderOverlay
              loading={overlay.dotLoader}
              message={
                <p style={{ marginTop: "12px" }}>
                  If you want, you can insert message!
                </p>
              }
            />
          </SectionContainer>

          <SectionContainer
            title={"<BounceLetterLoader />"}
            setShowOverlay={(nextShowStatus: boolean) =>
              setOverlay({ ...overlay, bounceLetterLoader: nextShowStatus })
            }
          >
            <BounceLetterLoader />
            <BounceLetterLoaderOverlay
              loading={overlay.bounceLetterLoader}
              message={
                <p style={{ marginTop: "12px" }}>
                  If you want, you can insert message!
                </p>
              }
            />
          </SectionContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
