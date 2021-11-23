import { render, screen } from "@testing-library/react";
import { RouletteSpinner, RouletteSpinnerOverlay } from "../../src";
import React from "react";

describe("RouletteSpinner", () => {
  describe("Loader", () => {
    test("correct size", () => {
      render(<RouletteSpinner size={20} />);

      expect(screen.getByTestId("roulette-spinner")).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getByTestId("roulette-spinner")).toHaveStyle("width: 20px");
    });

    test("has correct rotate transform", () => {
      render(<RouletteSpinner />);

      expect(screen.getAllByTestId("roulette-element")[0]).toHaveStyle(
        "transform: rotate(0deg)"
      );
      expect(screen.getAllByTestId("roulette-element")[1]).toHaveStyle(
        "transform: rotate(45deg)"
      );
      expect(screen.getAllByTestId("roulette-element")[2]).toHaveStyle(
        "transform: rotate(90deg)"
      );
      expect(screen.getAllByTestId("roulette-element")[3]).toHaveStyle(
        "transform: rotate(135deg)"
      );
      expect(screen.getAllByTestId("roulette-element")[4]).toHaveStyle(
        "transform: rotate(180deg)"
      );
      expect(screen.getAllByTestId("roulette-element")[5]).toHaveStyle(
        "transform: rotate(225deg)"
      );
      expect(screen.getAllByTestId("roulette-element")[6]).toHaveStyle(
        "transform: rotate(270deg)"
      );
      expect(screen.getAllByTestId("roulette-element")[7]).toHaveStyle(
        "transform: rotate(315deg)"
      );
    });

    test("has correct color", () => {
      render(<RouletteSpinner color="rgb(1, 1, 1)" />);

      expect(screen.getAllByTestId("roulette-element-inner")[0]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[1]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[2]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[3]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[4]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[5]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[6]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[7]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
    });

    test("does not display", () => {
      render(<RouletteSpinner loading={false} />);

      expect(screen.queryByTestId("roulette-spinner")).not.toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    test("displays correct message", () => {
      render(<RouletteSpinnerOverlay message="loading message" />);

      expect(screen.getByText("loading message")).toBeInTheDocument();
    });

    test("has correct overlay color", () => {
      render(<RouletteSpinnerOverlay overlayColor="rga(1, 1, 1)" />);

      expect(screen.queryByTestId("overlay")).toHaveStyle(
        "backgroundColor: rga(1, 1, 1)"
      );
    });

    test("has correct zIndex", () => {
      render(<RouletteSpinnerOverlay zIndex={10} />);

      expect(screen.queryByTestId("overlay")).toHaveStyle("zIndex: 10");
    });

    test("correct size", () => {
      render(<RouletteSpinner size={20} />);

      expect(screen.getByTestId("roulette-spinner")).toHaveStyle(
        "height: 20px"
      );
      expect(screen.getByTestId("roulette-spinner")).toHaveStyle("width: 20px");
    });

    test("has correct color", () => {
      render(<RouletteSpinner color="rgb(1, 1, 1)" />);

      expect(screen.getAllByTestId("roulette-element-inner")[0]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[1]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[2]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[3]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[4]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[5]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[6]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
      expect(screen.getAllByTestId("roulette-element-inner")[7]).toHaveStyle(
        "backgroundColor: rgb(1, 1, 1)"
      );
    });

    test("does not display", () => {
      render(<RouletteSpinnerOverlay loading={false} />);

      expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
    });
  });
});
