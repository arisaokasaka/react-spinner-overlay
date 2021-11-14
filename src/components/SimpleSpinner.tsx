import "../style/animation.css";
import React from "react";
import { Overlay, OverlayProps } from "./common/Overlay";

type SimpleSpinnerProps = {
  loading?: boolean;
  size?: number;
  color?: string;
  borderWidth?: number;
};

export const SimpleSpinner: React.FC<SimpleSpinnerProps> = ({
  loading = true,
  size = 60,
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

export const SimpleSpinnerOverlay: React.FC<SimpleSpinnerProps & OverlayProps> =
  ({
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
          <Overlay
            overlayColor={overlayColor}
            zIndex={zIndex}
            message={message}
          >
            <SimpleSpinner
              size={size}
              color={color}
              borderWidth={borderWidth}
            />
          </Overlay>
        )}
      </>
    );
  };
