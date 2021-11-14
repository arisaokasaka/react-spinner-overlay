import "../style/animation.css";
import React from "react";
import { Overlay, OverlayProps } from "./common/Overlay";

type FerrisWheelSpinnerProps = {
  loading?: boolean;
  size?: number;
  color?: string;
};

export const FerrisWheelSpinner: React.FC<FerrisWheelSpinnerProps> = ({
  loading = true,
  size = 40,
  color = "#00ced1",
}) => {
  const Border: React.FC<{
    rotate: number;
  }> = ({ rotate }) => {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <span
          style={{
            display: "block",
            backgroundColor: color,
            width: `20%`,
            height: `20%`,
            borderRadius: "100%",
          }}
        ></span>
      </div>
    );
  };

  return (
    <>
      {loading && (
        <div
          className="rotate-infinite-slow"
          style={{
            display: "block",
            position: "relative",
            height: `${size}px`,
            width: `${size}px`,
            boxSizing: "border-box",
          }}
        >
          <Border rotate={0} />
          <Border rotate={45} />
          <Border rotate={90} />
          <Border rotate={135} />
          <Border rotate={180} />
          <Border rotate={225} />
          <Border rotate={270} />
          <Border rotate={315} />
        </div>
      )}
    </>
  );
};

export const FerrisWheelSpinnerOverlay: React.FC<
  FerrisWheelSpinnerProps & OverlayProps
> = ({ loading = true, size, color, overlayColor, zIndex, message }) => {
  return (
    <>
      {loading && (
        <Overlay overlayColor={overlayColor} zIndex={zIndex} message={message}>
          <FerrisWheelSpinner size={size} color={color} />
        </Overlay>
      )}
    </>
  );
};
