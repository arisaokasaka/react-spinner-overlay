import { render, screen } from "@testing-library/react";
import { LineLoader, LineLoaderOverlay } from "../../src";
import React from "react";

describe("LineLoader", () => {
  describe("Loader", () => {
    test("correct size", () => {
      render(<LineLoader width={5} height={6} />);

      expect(screen.getByTestId("line-loader")).toHaveStyle("height: 6px");
      expect(screen.getByTestId("line-loader")).toHaveStyle("width: 5px");
      expect(screen.getByTestId("line-loader-back")).toHaveStyle("height: 6px");
      expect(screen.getByTestId("line-loader-back")).toHaveStyle("width: 5px");
      expect(screen.getByTestId("line-loader-front")).toHaveStyle(
        "height: 6px"
      );
      expect(screen.getByTestId("line-loader-front")).toHaveStyle("width: 5px");
    });

    test("has correct border radius", () => {
      render(<LineLoader borderRadius={3} />);

      expect(screen.getByTestId("line-loader")).toHaveStyle(
        "borderRadius: 3px"
      );
    });

    test("has correct color", () => {
      render(<LineLoader color="rgb(0, 0, 0)" />);

      expect(screen.getByTestId("line-loader-back")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("line-loader-front")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
    });

    test("has correct bgOpacity", () => {
      render(<LineLoader bgOpacity={0.4} />);

      expect(screen.getByTestId("line-loader-back")).toHaveStyle(
        "opacity: 0.4"
      );
    });

    test("does not display", () => {
      render(<LineLoader loading={false} />);

      expect(screen.queryByTestId("line-loader")).not.toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    test("displays correct message", () => {
      render(<LineLoaderOverlay message="loading message" />);

      expect(screen.getByText("loading message")).toBeInTheDocument();
    });

    test("has correct overlay color", () => {
      render(<LineLoaderOverlay overlayColor="rga(1, 1, 1)" />);

      expect(screen.queryByTestId("overlay")).toHaveStyle(
        "backgroundColor: rga(1, 1, 1)"
      );
    });

    test("has correct zIndex", () => {
      render(<LineLoaderOverlay zIndex={10} />);

      expect(screen.queryByTestId("overlay")).toHaveStyle("zIndex: 10");
    });

    test("correct size", () => {
      render(<LineLoader width={5} height={6} />);

      expect(screen.getByTestId("line-loader")).toHaveStyle("height: 6px");
      expect(screen.getByTestId("line-loader")).toHaveStyle("width: 5px");
      expect(screen.getByTestId("line-loader-back")).toHaveStyle("height: 6px");
      expect(screen.getByTestId("line-loader-back")).toHaveStyle("width: 5px");
      expect(screen.getByTestId("line-loader-front")).toHaveStyle(
        "height: 6px"
      );
      expect(screen.getByTestId("line-loader-front")).toHaveStyle("width: 5px");
    });

    test("has correct border radius", () => {
      render(<LineLoader borderRadius={3} />);

      expect(screen.getByTestId("line-loader")).toHaveStyle(
        "borderRadius: 3px"
      );
    });

    test("has correct color", () => {
      render(<LineLoader color="rgb(0, 0, 0)" />);

      expect(screen.getByTestId("line-loader-back")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("line-loader-front")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
    });

    test("has correct bgOpacity", () => {
      render(<LineLoader bgOpacity={0.4} />);

      expect(screen.getByTestId("line-loader-back")).toHaveStyle(
        "opacity: 0.4"
      );
    });

    test("does not display", () => {
      render(<LineLoader loading={false} />);

      expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
    });
  });
});
