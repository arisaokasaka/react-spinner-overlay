import { render, screen } from "@testing-library/react";
import { DartsSpinner, DartsSpinnerOverlay } from "../../src";
import React from "react";

describe("DartsSpinner", () => {
  describe("Loader", () => {
    test("correct size", () => {
      render(<DartsSpinner size={20} />);

      expect(screen.getByTestId("darts-spinner")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("darts-spinner")).toHaveStyle("width: 20px");
    });

    test("has correct color", () => {
      render(<DartsSpinner color="rgb(0, 0, 0)" />);

      expect(screen.getByTestId("darts-spinner-el-1")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("darts-spinner-el-2")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("darts-spinner-el-3")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("darts-spinner-el-4")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
    });

    test("does not display", () => {
      render(<DartsSpinner loading={false} />);

      expect(screen.queryByTestId("darts-spinner")).not.toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    test("displays correct message", () => {
      render(<DartsSpinnerOverlay message="loading message" />);

      expect(screen.getByText("loading message")).toBeInTheDocument();
    });

    test("has correct overlay color", () => {
      render(<DartsSpinnerOverlay overlayColor="rga(1, 1, 1)" />);

      expect(screen.queryByTestId("overlay")).toHaveStyle(
        "backgroundColor: rga(1, 1, 1)"
      );
    });

    test("has correct zIndex", () => {
      render(<DartsSpinnerOverlay zIndex={10} />);

      expect(screen.queryByTestId("overlay")).toHaveStyle("zIndex: 10");
    });

    test("correct size", () => {
      render(<DartsSpinner size={20} />);

      expect(screen.getByTestId("darts-spinner")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("darts-spinner")).toHaveStyle("width: 20px");
    });

    test("has correct color", () => {
      render(<DartsSpinner color="rgb(0, 0, 0)" />);

      expect(screen.getByTestId("darts-spinner-el-1")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("darts-spinner-el-2")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("darts-spinner-el-3")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("darts-spinner-el-4")).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
    });

    test("does not display", () => {
      render(<DartsSpinner loading={false} />);

      expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
    });
  });
});
