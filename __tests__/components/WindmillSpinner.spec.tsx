import { render, screen } from "@testing-library/react";
import { WindmillSpinner, WindmillSpinnerOverlay } from "../../src";
import React from "react";

describe("WindmillSpinner", () => {
  describe("Loader", () => {
    test("correct size", () => {
      render(<WindmillSpinner size={20} />);

      expect(screen.getByTestId("windmill-spinner")).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getByTestId("windmill-spinner")).toHaveStyle("width: 20px");
      expect(screen.getAllByTestId("windmill-border")[0]).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getAllByTestId("windmill-border")[0]).toHaveStyle(
        "width: 20px"
      );
    });

    test("has correct border props", () => {
      render(
        <WindmillSpinner borderWidth={12} borderHeight={4} borderRadius={3} />
      );

      expect(screen.getAllByTestId("windmill-border-inner")[0]).toHaveStyle(
        "height: 4px"
      );
      expect(screen.getAllByTestId("windmill-border-inner")[0]).toHaveStyle(
        "width: 12px"
      );
      expect(screen.getAllByTestId("windmill-border-inner")[0]).toHaveStyle(
        "borderRadius: 3px"
      );
    });

    test("has correct color", () => {
      render(<WindmillSpinner color="rgb(0, 0, 0)" />);

      expect(screen.getAllByTestId("windmill-border-inner")[0]).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
    });

    test("has correct rotate transform", () => {
      render(<WindmillSpinner />);

      expect(screen.getAllByTestId("windmill-border")[0]).toHaveStyle(
        "transform: rotate(0deg)"
      );
      expect(screen.getAllByTestId("windmill-border")[1]).toHaveStyle(
        "transform: rotate(45deg)"
      );
      expect(screen.getAllByTestId("windmill-border")[2]).toHaveStyle(
        "transform: rotate(90deg)"
      );
      expect(screen.getAllByTestId("windmill-border")[3]).toHaveStyle(
        "transform: rotate(135deg)"
      );
      expect(screen.getAllByTestId("windmill-border")[4]).toHaveStyle(
        "transform: rotate(180deg)"
      );
      expect(screen.getAllByTestId("windmill-border")[5]).toHaveStyle(
        "transform: rotate(225deg)"
      );
      expect(screen.getAllByTestId("windmill-border")[6]).toHaveStyle(
        "transform: rotate(270deg)"
      );
      expect(screen.getAllByTestId("windmill-border")[7]).toHaveStyle(
        "transform: rotate(315deg)"
      );
    });

    test("does not display", () => {
      render(<WindmillSpinner loading={false} />);

      expect(screen.queryByTestId("windmill-spinner")).not.toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    test("displays correct message", () => {
      render(<WindmillSpinnerOverlay message="loading message" />);

      expect(screen.getByText("loading message")).toBeInTheDocument();
    });

    test("has correct overlay color", () => {
      render(<WindmillSpinnerOverlay overlayColor="rga(1, 1, 1)" />);

      expect(screen.queryByTestId("overlay")).toHaveStyle(
        "backgroundColor: rga(1, 1, 1)"
      );
    });

    test("has correct zIndex", () => {
      render(<WindmillSpinnerOverlay zIndex={10} />);

      expect(screen.queryByTestId("overlay")).toHaveStyle("zIndex: 10");
    });

    test("correct size", () => {
      render(<WindmillSpinner size={20} />);

      expect(screen.getByTestId("windmill-spinner")).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getByTestId("windmill-spinner")).toHaveStyle("width: 20px");
      expect(screen.getAllByTestId("windmill-border")[0]).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getAllByTestId("windmill-border")[0]).toHaveStyle(
        "width: 20px"
      );
    });

    test("has correct border props", () => {
      render(
        <WindmillSpinner borderWidth={12} borderHeight={4} borderRadius={3} />
      );

      expect(screen.getAllByTestId("windmill-border-inner")[0]).toHaveStyle(
        "height: 4px"
      );
      expect(screen.getAllByTestId("windmill-border-inner")[0]).toHaveStyle(
        "width: 12px"
      );
      expect(screen.getAllByTestId("windmill-border-inner")[0]).toHaveStyle(
        "borderRadius: 3px"
      );
    });

    test("has correct color", () => {
      render(<WindmillSpinner color="rgb(0, 0, 0)" />);

      expect(screen.getAllByTestId("windmill-border-inner")[0]).toHaveStyle(
        "backgroundColor: rgb(0, 0, 0)"
      );
    });

    test("does not display", () => {
      render(<WindmillSpinner loading={false} />);

      expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
    });
  });
});
