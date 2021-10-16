import React from "react";

type Props = {
  loading?: boolean;
  size?: number;
  color?: string;
  innerBorderWidth?: number;
  outerBorderWidth?: number;
  innerBorderOpacity?: number;
  outerBorderOpacity?: number;
};

export const CircleSpinner: React.FC<Props> = ({
  loading = true,
  size = 60,
  color = "#00ced1",
  innerBorderWidth = 8,
  outerBorderWidth = 1,
  innerBorderOpacity = 1,
  outerBorderOpacity = 1,
}) => {
  return (
    <>
      {loading && (
        <div
          className="rotate-infinite"
          style={{
            display: "block",
            position: "relative",
            height: `${size}px`,
            width: `${size}px`,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "block",
              position: "relative",
              height: `${size}px`,
              width: `${size}px`,
              color: `${color}`,
              borderRadius: "50%",
              border: `${innerBorderWidth}px solid ${color}`,
              borderColor: "transparent",
              borderTopColor: `${color}`,
              boxSizing: "border-box",
              opacity: innerBorderOpacity,
            }}
          ></div>
          <div
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
