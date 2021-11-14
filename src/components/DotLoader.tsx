import React from "react";
import { Overlay, OverlayProps } from "./common/Overlay";

type DotLoaderProps = {
  loading?: boolean;
  size?: number;
  color?: string;
  between?: number;
};

export const DotLoader: React.FC<DotLoaderProps> = ({
  loading = true,
  size = 12,
  color = "#00ced1",
  between = 3,
}) => {
  return (
    <>
      {loading && (
        <div style={{ display: "flex", columnGap: between }}>
          <div
            className="bounce-vertically-90"
            style={{
              width: size,
              height: size,
              borderRadius: size,
              backgroundColor: color,
              animationDelay: "0.1s",
            }}
          ></div>
          <div
            className="bounce-vertically-90"
            style={{
              width: size,
              height: size,
              borderRadius: size,
              backgroundColor: color,
              animationDelay: "0.2s",
            }}
          ></div>
          <div
            className="bounce-vertically-90"
            style={{
              width: size,
              height: size,
              borderRadius: size,
              backgroundColor: color,
              animationDelay: "0.3s",
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export const DotLoaderOverlay: React.FC<DotLoaderProps & OverlayProps> = ({
  loading = true,
  size,
  color,
  between,
  overlayColor,
  zIndex,
  message,
}) => {
  return (
    <>
      {loading && (
        <Overlay overlayColor={overlayColor} zIndex={zIndex} message={message}>
          <DotLoader size={size} color={color} between={between} />
        </Overlay>
      )}
    </>
  );
};
