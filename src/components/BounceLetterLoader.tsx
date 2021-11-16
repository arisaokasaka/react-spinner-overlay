import React from "react";
import "../animation/bounce-vertically-40.css";
import { Overlay, OverlayProps } from "./common/Overlay";

type BounceLetterLoaderProps = {
  loading?: boolean;
  letters?: string;
  color?: string;
  animationDuration?: number;
};

export const BounceLetterLoader: React.FC<BounceLetterLoaderProps> = ({
  loading = true,
  letters = "Loading...",
  color = "#00ced1",
  animationDuration,
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
                animationDuration: `${animationDuration}s`,
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
  animationDuration,
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
            animationDuration={animationDuration}
            color={color}
          />
        </Overlay>
      )}
    </>
  );
};
