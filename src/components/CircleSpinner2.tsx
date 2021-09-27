import React from "react";

type Props = {
  loading?: boolean;
  size?: number;
  color?: string;
  borderWidth?: number;
  orbitOpacity?: number;
};

export const CircleSpinner2: React.FC<Props> = ({
  loading = true,
  size = 60,
  color = "#00ced1",
  borderWidth = 8,
  orbitOpacity = 0.3,
}) => {
  return (
    <>
      {loading && (
        <div
          className="rotate-infinite"
          style={{
            display: "inline-block",
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
              border: `${borderWidth}px solid ${color}`,
              borderColor: "transparent",
              borderTopColor: `${color}`,
              boxSizing: "border-box",
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
              border: `${borderWidth}px solid ${color}`,
              boxSizing: "border-box",
              opacity: orbitOpacity,
            }}
          ></div>
        </div>
      )}
    </>
  );
};
