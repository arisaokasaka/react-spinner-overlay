import React from "react";

type Props = {
  letters?: string;
  loading?: boolean;
  width?: number;
  height?: number;
  color?: string;
  animationDelay?: number;
};

export const BounceLetterLoader: React.FC<Props> = ({
  loading = true,
  letters = "Loading",
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
              className="bounce-vertically"
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
