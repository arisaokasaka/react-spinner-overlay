import React from "react";
import "../animation/fading-four-count.css";
import { Overlay, OverlayProps } from "./common/Overlay";

type DartsSpinnerProps = {
  loading?: boolean;
  size?: number;
  color?: string;
};

export const DartsSpinner: React.FC<DartsSpinnerProps> = ({
  loading = true,
  size = 48,
  color = "#00ced1",
}) => {
  return (
    <>
      {loading && (
        <div
          data-testid="darts-spinner"
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            position: "relative",
            height: `${size}px`,
            width: `${size}px`,
            boxSizing: "border-box",
            borderRadius: `${size}px`,
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <span
            data-testid="darts-spinner-el-1"
            className="fading-four-count-1"
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              backgroundColor: color,
            }}
          ></span>
          <span
            data-testid="darts-spinner-el-2"
            className="fading-four-count-2"
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              backgroundColor: color,
            }}
          ></span>
          <span
            data-testid="darts-spinner-el-3"
            className="fading-four-count-4"
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              backgroundColor: color,
            }}
          ></span>
          <span
            data-testid="darts-spinner-el-4"
            className="fading-four-count-3"
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              backgroundColor: color,
            }}
          ></span>
        </div>
      )}
    </>
  );
};

export const DartsSpinnerOverlay: React.FC<DartsSpinnerProps & OverlayProps> =
  ({ loading = true, size, color, overlayColor, zIndex, message }) => {
    return (
      <>
        {loading && (
          <Overlay
            overlayColor={overlayColor}
            zIndex={zIndex}
            message={message}
          >
            <DartsSpinner size={size} color={color} />
          </Overlay>
        )}
      </>
    );
  };
