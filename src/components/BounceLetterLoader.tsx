import "../index.css";
import React from "react";
import { Overlay, OverlayProps } from "./common/Overlay";

type BounceLetterLoaderProps = {
  letters?: string;
  loading?: boolean;
  width?: number;
  height?: number;
  color?: string;
  animationDelay?: number;
};

export const BounceLetterLoader: React.FC<BounceLetterLoaderProps> = ({
  loading = true,
  letters = "Loading...",
  color = "#00ced1",
  animationDelay,
}) => {
  const letterList: string[] = letters.split("");

  return (
    <>
      {loading && (
        <div
          style={{
            position: "relative",
            display: "block",
          }}
        >
          {letterList.map((letter, index) => (
            <span
              className="bounce-vertically-40"
              key={`letter-${index}`}
              style={{
                display: "inline-block",
                color: color,
                minWidth: "4px",
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${animationDelay}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export const BounceLetterLoaderOverlay: React.FC<
  BounceLetterLoaderProps & OverlayProps
> = ({
  loading = true,
  letters,
  color,
  animationDelay,
  overlayColor,
  zIndex,
  message,
}) => {
  return (
    <>
      {loading && (
        <Overlay overlayColor={overlayColor} zIndex={zIndex} message={message}>
          <BounceLetterLoader
            letters={letters}
            animationDelay={animationDelay}
            color={color}
          />
        </Overlay>
      )}
    </>
  );
};
