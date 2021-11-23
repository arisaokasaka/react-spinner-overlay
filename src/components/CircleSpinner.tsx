import React from "react";
import "../animation/rotate-infinite.css";
import { Overlay, OverlayProps } from "./common/Overlay";

type CircleSpinnerProps = {
  loading?: boolean;
  size?: number;
  color?: string;
  innerBorderWidth?: number;
  outerBorderWidth?: number;
  innerBorderOpacity?: number;
  outerBorderOpacity?: number;
};

export const CircleSpinner: React.FC<CircleSpinnerProps> = ({
  loading = true,
  size = 42,
  color = "#00ced1",
  innerBorderWidth = 6,
  outerBorderWidth = 1,
  innerBorderOpacity = 1,
  outerBorderOpacity = 1,
}) => {
  return (
    <>
      {loading && (
        <div
          className="rotate-infinite"
          data-testid="circle-spinner"
          style={{
            display: "block",
            position: "relative",
            height: `${size}px`,
            width: `${size}px`,
            boxSizing: "border-box",
          }}
        >
          <div
            data-testid="circle-spinner-inner"
            style={{
              display: "block",
              position: "relative",
              height: `${size}px`,
              width: `${size}px`,
              borderRadius: "50%",
              border: `${innerBorderWidth}px solid ${color}`,
              borderColor: "transparent",
              borderTopColor: `${color}`,
              boxSizing: "border-box",
              opacity: innerBorderOpacity,
            }}
          ></div>
          <div
            data-testid="circle-spinner-outer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              border: `${outerBorderWidth}px solid ${color}`,
              boxSizing: "border-box",
              opacity: outerBorderOpacity,
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export const CircleSpinnerOverlay: React.FC<CircleSpinnerProps & OverlayProps> =
  ({
    loading = true,
    size,
    color,
    innerBorderWidth,
    outerBorderWidth,
    innerBorderOpacity,
    outerBorderOpacity,
    overlayColor,
    zIndex,
    message,
  }) => {
    return (
      <>
        {loading && (
          <Overlay
            overlayColor={overlayColor}
            zIndex={zIndex}
            message={message}
          >
            <CircleSpinner
              size={size}
              color={color}
              innerBorderWidth={innerBorderWidth}
              outerBorderWidth={outerBorderWidth}
              innerBorderOpacity={innerBorderOpacity}
              outerBorderOpacity={outerBorderOpacity}
            />
          </Overlay>
        )}
      </>
    );
  };
