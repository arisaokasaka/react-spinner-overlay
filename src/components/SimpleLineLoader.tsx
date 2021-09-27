import React from "react";

type Props = {
  loading?: boolean;
  width?: number;
  height?: number;
  color?: string;
  bgOpacity?: number;
  borderRadius?: number;
};

export const SimpleLineLoader: React.FC<Props> = ({
  loading = true,
  width = 60,
  height = 4,
  color = "#00ced1",
  borderRadius = 10,
}) => {
  return (
    <>
      {loading && (
        <div
          style={{
            display: "block",
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${borderRadius}px`,
            overflow: "hidden",
          }}
        >
          <div
            className="swing-horizontally"
            style={{
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
