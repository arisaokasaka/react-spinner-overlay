import { render, screen } from "@testing-library/react";
import { CircleSpinner, CircleSpinnerOverlay } from "../../src";
import React from "react";

describe("CircleSpinner", () => {
  describe("Loader", () => {
    test("correct size", () => {
      render(<CircleSpinner size={20} />);

      expect(screen.getByTestId("circle-spinner")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("circle-spinner")).toHaveStyle("width: 20px");
      expect(screen.getByTestId("circle-spinner-inner")).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getByTestId("circle-spinner-inner")).toHaveStyle(
        "width: 20px"
      );
      expect(screen.getByTestId("circle-spinner-outer")).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getByTestId("circle-spinner-outer")).toHaveStyle(
        "width: 20px"
      );
    });

    test("has correct color", () => {
      render(<CircleSpinner color="rgb(0, 0, 0)" />);

      expect(screen.getByTestId("circle-spinner-inner")).toHaveStyle(
        "borderTopColor: rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("circle-spinner-inner")).toHaveStyle(
        "border: 6px solid rgb(0, 0, 0)"
      );
    });

    test("has correct border width", () => {
      render(
        <CircleSpinner
          innerBorderWidth={2}
          outerBorderWidth={4}
          color="rgb(0, 0, 0)"
        />
      );

      expect(screen.getByTestId("circle-spinner-inner")).toHaveStyle(
        "border: 2px solid rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("circle-spinner-outer")).toHaveStyle(
        "border: 4px solid rgb(0, 0, 0)"
      );
    });

    test("has correct border opacity", () => {
      render(
        <CircleSpinner innerBorderOpacity={0.2} outerBorderOpacity={0.5} />
      );

      expect(screen.getByTestId("circle-spinner-inner")).toHaveStyle(
        "opacity: 0.2"
      );
      expect(screen.getByTestId("circle-spinner-outer")).toHaveStyle(
        "opacity: 0.5"
      );
    });

    test("does not display", () => {
      render(<CircleSpinner loading={false} />);

      expect(screen.queryByTestId("circle-spinner")).not.toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    test("displays correct message", () => {
      render(<CircleSpinnerOverlay message="loading message" />);

      expect(screen.getByText("loading message")).toBeInTheDocument();
    });

    test("has correct overlay color", () => {
      render(<CircleSpinnerOverlay overlayColor="rga(1, 1, 1)" />);

      expect(screen.queryByTestId("overlay")).toHaveStyle(
        "backgroundColor: rga(1, 1, 1)"
      );
    });

    test("has correct zIndex", () => {
      render(<CircleSpinnerOverlay zIndex={10} />);

      expect(screen.queryByTestId("overlay")).toHaveStyle("zIndex: 10");
    });

    test("correct size", () => {
      render(<CircleSpinnerOverlay size={20} />);

      expect(screen.getByTestId("circle-spinner")).toHaveStyle("height: 20px");
      expect(screen.getByTestId("circle-spinner")).toHaveStyle("width: 20px");
      expect(screen.getByTestId("circle-spinner-inner")).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getByTestId("circle-spinner-inner")).toHaveStyle(
        "width: 20px"
      );
      expect(screen.getByTestId("circle-spinner-outer")).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getByTestId("circle-spinner-outer")).toHaveStyle(
        "width: 20px"
      );
    });

    test("has correct border width and color", () => {
      render(
        <CircleSpinnerOverlay
          innerBorderWidth={2}
          outerBorderWidth={4}
          color="rgb(0, 0, 0)"
        />
      );

      expect(screen.getByTestId("circle-spinner-inner")).toHaveStyle(
        "border: 2px solid rgb(0, 0, 0)"
      );
      expect(screen.getByTestId("circle-spinner-outer")).toHaveStyle(
        "border: 4px solid rgb(0, 0, 0)"
      );
    });

    test("has correct border opacity", () => {
      render(
        <CircleSpinnerOverlay
          innerBorderOpacity={0.2}
          outerBorderOpacity={0.5}
        />
      );

      expect(screen.getByTestId("circle-spinner-inner")).toHaveStyle(
        "opacity: 0.2"
      );
      expect(screen.getByTestId("circle-spinner-outer")).toHaveStyle(
        "opacity: 0.5"
      );
    });

    test("does not display", () => {
      render(<CircleSpinnerOverlay loading={false} />);

      expect(screen.queryByTestId("circle-spinner")).not.toBeInTheDocument();
    });
  });
});
