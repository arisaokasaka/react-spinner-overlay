import React from "react";

type Props = {
  loading?: boolean;
  size?: number;
  color?: string;
  innerBorderWidth?: number;
  outerBorderWidth?: number;
};

export const RouletteSpinner: React.FC<Props> = ({
  loading = true,
  size = 60,
  color = "#00ced1",
}) => {
  return (
    <>
      {loading && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            position: "relative",
            height: `${size}px`,
            width: `${size}px`,
            boxSizing: "border-box",
            borderRadius: `${size}px`,
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <span
            className="fading-four-count-1"
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              backgroundColor: color,
            }}
          ></span>
          <span
            className="fading-four-count-2"
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              backgroundColor: color,
            }}
          ></span>
          <span
            className="fading-four-count-4"
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              backgroundColor: color,
            }}
          ></span>
          <span
            className="fading-four-count-3"
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              backgroundColor: color,
            }}
          ></span>
        </div>
      )}
    </>
  );
};
