import React from "react";
import "../animation/swing-horizontally.css";
import { Overlay, OverlayProps } from "./common/Overlay";

type LineLoaderProps = {
  loading?: boolean;
  width?: number;
  height?: number;
  color?: string;
  bgOpacity?: number;
  borderRadius?: number;
};

export const LineLoader: React.FC<LineLoaderProps> = ({
  loading = true,
  width = 60,
  height = 4,
  color = "#00ced1",
  bgOpacity = 0.3,
  borderRadius = 10,
}) => {
  return (
    <>
      {loading && (
        <div
          style={{
            position: "relative",
            display: "block",
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${borderRadius}px`,
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              display: "block",
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: color,
              opacity: bgOpacity,
            }}
          ></div>
          <div
            className="swing-horizontally"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: color,
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export const LineLoaderOverlay: React.FC<LineLoaderProps & OverlayProps> = ({
  loading = true,
  width,
  height,
  color,
  bgOpacity,
  borderRadius,
  overlayColor,
  zIndex,
  message,
}) => {
  return (
    <>
      {loading && (
        <Overlay overlayColor={overlayColor} zIndex={zIndex} message={message}>
          <LineLoader
            width={width}
            height={height}
            color={color}
            bgOpacity={bgOpacity}
            borderRadius={borderRadius}
          />
        </Overlay>
      )}
    </>
  );
};
