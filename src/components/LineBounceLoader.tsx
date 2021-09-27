import React from "react";

type Props = {
  loading?: boolean;
  width?: number;
  height?: number;
  color?: string;
  bgOpacity?: number;
  borderRadius?: number;
};

export const LineBounceLoader: React.FC<Props> = ({
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
