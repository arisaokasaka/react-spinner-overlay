import "./index.css";
import React, { useState } from "react";
import { CircleSpinner, CircleSpinnerOverlay } from "../../src/index";
import { DartsSpinner, DartsSpinnerOverlay } from "../../src/index";
import { LineLoader, LineLoaderOverlay } from "../../src/index";
import { RingSpinner, RingSpinnerOverlay } from "../../src/index";
import { FerrisWheelSpinner, FerrisWheelSpinnerOverlay } from "../../src/index";
import { WindmillSpinner, WindmillSpinnerOverlay } from "../../src/index";
import { BounceLetterLoader, BounceLetterLoaderOverlay } from "../../src/index";
import { DotLoader, DotLoaderOverlay } from "../../src/index";
import { RouletteSpinner, RouletteSpinnerOverlay } from "../../src/index";

function App() {
  const [overlay, setOverlay] = useState({
    circleSpinner: false,
    lineLoader: false,
    ringSpinner: false,
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
    overlayButtonColor?: string;
  }> = ({
    title,
    setShowOverlay,
    overlayButtonColor = "#00ced1",
    children,
  }) => {
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
            backgroundColor: overlayButtonColor,
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
          $ yarn add react-spinner-overlay
        </code>
        <code
          style={{
            marginTop: "6px",
            padding: "8px 16px",
            backgroundColor: "rgb(212 228 228)",
            fontSize: "14px",
          }}
        >
          $ npm install --save react-spinner-overlay
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
                <CircleSpinner outerBorderOpacity={0.3} outerBorderWidth={6} />
                <p style={{ marginTop: "16px", fontSize: "12px" }}>
                  outerBorderOpacity={0.3}
                  <br />
                  outerBorderWidth={6}
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
            overlayButtonColor="#32C7BB"
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
                  <LineLoader color="#32C7BB" />
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
                  <LineLoader bgOpacity={0} color="#32C7BB" />
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
              color="#32C7BB"
            />
          </SectionContainer>

          <SectionContainer
            title={"<RingSpinner />"}
            setShowOverlay={(nextShowStatus: boolean) =>
              setOverlay({ ...overlay, ringSpinner: nextShowStatus })
            }
          >
            <RingSpinner />
            <RingSpinnerOverlay
              loading={overlay.ringSpinner}
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
            overlayButtonColor="#32C7BB"
          >
            <FerrisWheelSpinner color="#32C7BB" />
            <FerrisWheelSpinnerOverlay
              color="#32C7BB"
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
            overlayButtonColor="#32C7BB"
          >
            <WindmillSpinner color="#32C7BB" />
            <WindmillSpinnerOverlay
              color="#32C7BB"
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
            overlayButtonColor="#32C7BB"
          >
            <DotLoader color="#32C7BB" />
            <DotLoaderOverlay
              color="#32C7BB"
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
              letters="Please wait"
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
