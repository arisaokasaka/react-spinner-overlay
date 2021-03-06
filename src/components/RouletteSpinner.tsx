import React from "react";
import "../animation/roulette.css";
import { Overlay, OverlayProps } from "./common/Overlay";

type RouletteSpinnerProps = {
  loading?: boolean;
  size?: number;
  color?: string;
};

export const RouletteSpinner: React.FC<RouletteSpinnerProps> = ({
  loading = true,
  size = 32,
  color = "#00ced1",
}) => {
  const Border: React.FC<{
    rotate: number;
    index: number;
  }> = ({ rotate, index }) => {
    return (
      <div
        data-testid="roulette-element"
        className="roulette"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotate}deg)`,
          animationDelay: `${(index - 1) * 0.1}s`,
          opacity: 0.3,
        }}
      >
        <span
          data-testid="roulette-element-inner"
          style={{
            display: "block",
            backgroundColor: color,
            width: `22%`,
            height: `22%`,
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
          data-testid="roulette-spinner"
          style={{
            display: "block",
            position: "relative",
            height: `${size}px`,
            width: `${size}px`,
            boxSizing: "border-box",
          }}
        >
          <Border rotate={0} index={1} />
          <Border rotate={45} index={2} />
          <Border rotate={90} index={3} />
          <Border rotate={135} index={4} />
          <Border rotate={180} index={5} />
          <Border rotate={225} index={6} />
          <Border rotate={270} index={7} />
          <Border rotate={315} index={8} />
        </div>
      )}
    </>
  );
};

export const RouletteSpinnerOverlay: React.FC<
  RouletteSpinnerProps & OverlayProps
> = ({ loading = true, size, color, overlayColor, zIndex, message }) => {
  return (
    <>
      {loading && (
        <Overlay overlayColor={overlayColor} zIndex={zIndex} message={message}>
          <RouletteSpinner size={size} color={color} />
        </Overlay>
      )}
    </>
  );
};
