import React from "react";

type Props = {
  loading?: boolean;
  size?: number;
  color?: string;
  borderWidth?: number;
};

export const SimpleSpinner: React.FC<Props> = ({
  loading = true,
  size = 60,
  color = "#00ced1",
  borderWidth = 2,
}) => {
  return (
    <>
      {loading && (
        <div
          className="rotate-infinite"
          style={{
            display: "block",
            height: `${size}px`,
            width: `${size}px`,
            color: `${color}`,
            borderRadius: "50%",
            border: `${borderWidth}px solid ${color}`,
            borderColor: `${color}`,
            borderTopColor: "transparent",
            boxSizing: "border-box",
          }}
        ></div>
      )}
    </>
  );
};
