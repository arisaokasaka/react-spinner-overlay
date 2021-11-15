import React from "react";
import "../animation/rotate-infinite.css";
import { Overlay, OverlayProps } from "./common/Overlay";

type RingSpinnerProps = {
  loading?: boolean;
  size?: number;
  color?: string;
  borderWidth?: number;
};

export const RingSpinner: React.FC<RingSpinnerProps> = ({
  loading = true,
  size = 42,
  color = "#00ced1",
  borderWidth = 2,
}) => {
  return (
    <>
      {loading && (
        <div
          className="rotate-infinite"
          style={{
            display: "block",
            height: `${size}px`,
            width: `${size}px`,
            color: `${color}`,
            borderRadius: "50%",
            border: `${borderWidth}px solid ${color}`,
            borderColor: `${color}`,
            borderTopColor: "transparent",
            boxSizing: "border-box",
          }}
        ></div>
      )}
    </>
  );
};

export const RingSpinnerOverlay: React.FC<RingSpinnerProps & OverlayProps> = ({
  loading = true,
  size,
  color,
  borderWidth,
  overlayColor,
  zIndex,
  message,
}) => {
  return (
    <>
      {loading && (
        <Overlay overlayColor={overlayColor} zIndex={zIndex} message={message}>
          <RingSpinner size={size} color={color} borderWidth={borderWidth} />
        </Overlay>
      )}
    </>
  );
};
