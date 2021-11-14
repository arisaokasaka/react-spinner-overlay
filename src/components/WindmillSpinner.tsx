import "../index.css";
import React from "react";
import { Overlay, OverlayProps } from "./common/Overlay";

type WindmillSpinnerProps = {
  loading?: boolean;
  size?: number;
  color?: string;
  borderWidth?: number;
  borderHeight?: number;
  borderRadius?: number;
};

export const WindmillSpinner: React.FC<WindmillSpinnerProps> = ({
  loading = true,
  size = 40,
  color = "#00ced1",
  borderWidth = 4,
  borderHeight = 10,
  borderRadius = 8,
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
          display: "flex",
          justifyContent: "center",
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <span
          style={{
            display: "block",
            backgroundColor: color,
            width: `${borderWidth}px`,
            height: `${borderHeight}px`,
            borderRadius: `${borderRadius}px`,
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

export const WindmillSpinnerOverlay: React.FC<
  WindmillSpinnerProps & OverlayProps
> = ({
  loading = true,
  size = 40,
  color = "#00ced1",
  borderWidth = 4,
  borderHeight = 10,
  borderRadius = 8,
  overlayColor,
  zIndex,
  message,
}) => {
  return (
    <>
      {loading && (
        <Overlay overlayColor={overlayColor} zIndex={zIndex} message={message}>
          <WindmillSpinner
            size={size}
            color={color}
            borderWidth={borderWidth}
            borderHeight={borderHeight}
            borderRadius={borderRadius}
          />
        </Overlay>
      )}
    </>
  );
};
