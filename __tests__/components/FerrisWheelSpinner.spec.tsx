import { render, screen } from "@testing-library/react";
import { FerrisWheelSpinner, FerrisWheelSpinnerOverlay } from "../../src";
import React from "react";

describe("FerrisWheelSpinner", () => {
  describe("Loader", () => {
    test("correct size", () => {
      render(<FerrisWheelSpinner size={20} />);

      expect(screen.getByTestId("ferris-wheel-spinner")).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getByTestId("ferris-wheel-spinner")).toHaveStyle(
        "width: 20px"
      );
    });

    test("has correct rotate transform", () => {
      render(<FerrisWheelSpinner />);

      expect(screen.getAllByTestId("ferris-wheel-border")[0]).toHaveStyle(
        "transform: rotate(0deg)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border")[1]).toHaveStyle(
        "transform: rotate(45deg)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border")[2]).toHaveStyle(
        "transform: rotate(90deg)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border")[3]).toHaveStyle(
        "transform: rotate(135deg)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border")[4]).toHaveStyle(
        "transform: rotate(180deg)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border")[5]).toHaveStyle(
        "transform: rotate(225deg)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border")[6]).toHaveStyle(
        "transform: rotate(270deg)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border")[7]).toHaveStyle(
        "transform: rotate(315deg)"
      );
    });

    test("has correct color", () => {
      render(<FerrisWheelSpinner color="rgb(1, 1, 1)" />);

      expect(screen.getAllByTestId("ferris-wheel-border-inner")[0]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[1]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[2]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[3]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[4]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[5]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[6]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[7]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
    });

    test("does not display", () => {
      render(<FerrisWheelSpinner loading={false} />);

      expect(
        screen.queryByTestId("ferris-wheel-spinner")
      ).not.toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    test("displays correct message", () => {
      render(<FerrisWheelSpinnerOverlay message="loading message" />);

      expect(screen.getByText("loading message")).toBeInTheDocument();
    });

    test("has correct overlay color", () => {
      render(<FerrisWheelSpinnerOverlay overlayColor="rga(1, 1, 1)" />);

      expect(screen.queryByTestId("overlay")).toHaveStyle(
        "backgroundColor: rga(1, 1, 1)"
      );
    });

    test("has correct zIndex", () => {
      render(<FerrisWheelSpinnerOverlay zIndex={10} />);

      expect(screen.queryByTestId("overlay")).toHaveStyle("zIndex: 10");
    });

    test("correct size", () => {
      render(<FerrisWheelSpinnerOverlay size={20} />);

      expect(screen.getByTestId("ferris-wheel-spinner")).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getByTestId("ferris-wheel-spinner")).toHaveStyle(
        "width: 20px"
      );
    });

    test("has correct color", () => {
      render(<FerrisWheelSpinnerOverlay color="rgb(1, 1, 1)" />);

      expect(screen.getAllByTestId("ferris-wheel-border-inner")[0]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[1]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[2]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[3]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[4]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[5]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[6]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("ferris-wheel-border-inner")[7]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
    });

    test("does not display", () => {
      render(<FerrisWheelSpinnerOverlay loading={false} />);

      expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
    });
  });
});
