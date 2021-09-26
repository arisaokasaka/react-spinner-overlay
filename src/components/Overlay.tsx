import React from "react";
import ReactDOM from "react-dom";

type Props = { loading: boolean; overlayColor?: string; zIndex?: number };

export const Overlay: React.FC<Props> = ({
  children,
  loading,
  overlayColor = "rgb(212 228 228 / 56%)",
  zIndex = 500,
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
      </div>,
      document.body
    );

  return <>{loading && <OverlayBody>{children}</OverlayBody>}</>;
};
