import { render, screen } from "@testing-library/react";
import { RingSpinner, RingSpinnerOverlay } from "../../src";
import React from "react";

describe("RingSpinner", () => {
  describe("Loader", () => {
    test("correct size", () => {
      render(<RingSpinner size={20} />);

      expect(screen.getByTestId("ring-spinner")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("ring-spinner")).toHaveStyle("width: 20px");
    });

    test("has correct color and border width", () => {
      render(<RingSpinner borderWidth={5} color="rgb(1, 1, 1)" />);

      expect(screen.getByTestId("ring-spinner")).toHaveStyle(
        "border: 5px solid rgb(1, 1, 1)"
      );
    });

    test("does not display", () => {
      render(<RingSpinner loading={false} />);

      expect(screen.queryByTestId("ring-spinner")).not.toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    test("displays correct message", () => {
      render(<RingSpinnerOverlay message="loading message" />);

      expect(screen.getByText("loading message")).toBeInTheDocument();
    });

    test("has correct overlay color", () => {
      render(<RingSpinnerOverlay overlayColor="rga(1, 1, 1)" />);

      expect(screen.queryByTestId("overlay")).toHaveStyle(
        "backgroundColor: rga(1, 1, 1)"
      );
    });

    test("has correct zIndex", () => {
      render(<RingSpinnerOverlay zIndex={10} />);

      expect(screen.queryByTestId("overlay")).toHaveStyle("zIndex: 10");
    });

    test("correct size", () => {
      render(<RingSpinner size={20} />);

      expect(screen.getByTestId("ring-spinner")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("ring-spinner")).toHaveStyle("width: 20px");
    });

    test("has correct color and border width", () => {
      render(<RingSpinner borderWidth={5} color="rgb(1, 1, 1)" />);

      expect(screen.getByTestId("ring-spinner")).toHaveStyle(
        "border: 5px solid rgb(1, 1, 1)"
      );
    });
    test("does not display", () => {
      render(<RingSpinnerOverlay loading={false} />);

      expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
    });
  });
});
