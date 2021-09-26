import React from "react";

type Props = { loading?: boolean; size?: number; color?: string };

export const CircleSpinner: React.FC<Props> = ({
  loading = true,
  size = 60,
  color = "#00ced1",
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
              border: `8px solid ${color}`,
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
              border: `1px solid ${color}`,
              boxSizing: "border-box",
            }}
          ></div>
        </div>
      )}
    </>
  );
};
