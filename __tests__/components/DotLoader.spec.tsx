import { render, screen } from "@testing-library/react";
import { DotLoader, DotLoaderOverlay } from "../../src";
import React from "react";

describe("DotLoader", () => {
  describe("Loader", () => {
    test("correct size", () => {
      render(<DotLoader size={20} />);

      expect(screen.getByTestId("dot-loader1")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("dot-loader1")).toHaveStyle("width: 20px");
      expect(screen.getByTestId("dot-loader2")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("dot-loader2")).toHaveStyle("width: 20px");
      expect(screen.getByTestId("dot-loader3")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("dot-loader3")).toHaveStyle("width: 20px");
    });

    test("has correct color", () => {
      render(<DotLoader color="rgb(0, 0, 0)" />);

      expect(screen.getByTestId("dot-loader1")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("dot-loader2")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("dot-loader3")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
    });

    test("has correct between", () => {
      render(<DotLoader between={6} />);

      expect(screen.getByTestId("dot-loader")).toHaveStyle("columnGap: 6px");
    });

    test("does not display", () => {
      render(<DotLoader loading={false} />);

      expect(screen.queryByTestId("dot-loader")).not.toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    test("displays correct message", () => {
      render(<DotLoaderOverlay message="loading message" />);

      expect(screen.getByText("loading message")).toBeInTheDocument();
    });

    test("has correct overlay color", () => {
      render(<DotLoaderOverlay overlayColor="rga(1, 1, 1)" />);

      expect(screen.queryByTestId("overlay")).toHaveStyle(
        "backgroundColor: rga(1, 1, 1)"
      );
    });

    test("has correct zIndex", () => {
      render(<DotLoaderOverlay zIndex={10} />);

      expect(screen.queryByTestId("overlay")).toHaveStyle("zIndex: 10");
    });

    test("correct size", () => {
      render(<DotLoader size={20} />);

      expect(screen.getByTestId("dot-loader1")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("dot-loader1")).toHaveStyle("width: 20px");
      expect(screen.getByTestId("dot-loader2")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("dot-loader2")).toHaveStyle("width: 20px");
      expect(screen.getByTestId("dot-loader3")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("dot-loader3")).toHaveStyle("width: 20px");
    });

    test("has correct color", () => {
      render(<DotLoader color="rgb(0, 0, 0)" />);

      expect(screen.getByTestId("dot-loader1")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("dot-loader2")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("dot-loader3")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
    });

    test("has correct between", () => {
      render(<DotLoader between={6} />);

      expect(screen.getByTestId("dot-loader")).toHaveStyle("columnGap: 6px");
    });

    test("does not display", () => {
      render(<DotLoader loading={false} />);

      expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
    });
  });
});
