import React from "react";
import ReactDOM from "react-dom";

export type OverlayProps = {
  overlayColor?: string;
  zIndex?: number;
  message?: string | JSX.Element;
};

export const Overlay: React.FC<OverlayProps> = ({
  children,
  overlayColor = "rgb(255 255 255 / 80%)",
  zIndex = 500,
  message,
}) => {
  const OverlayBody: React.FC = ({ children }) =>
    ReactDOM.createPortal(
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: overlayColor,
          zIndex: zIndex,
        }}
      >
        {children}
        {message && <>{message}</>}
      </div>,
      document.body
    );

  return <OverlayBody>{children}</OverlayBody>;
};
