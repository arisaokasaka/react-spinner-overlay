import { render, screen } from "@testing-library/react";
import { BounceLetterLoader, BounceLetterLoaderOverlay } from "../../src";
import React from "react";

describe("BounceLetterLoader", () => {
  describe("Loader", () => {
    test("displays correct letter", () => {
      render(<BounceLetterLoader loading={true} letters="abc" />);

      expect(screen.getByText("a")).toBeInTheDocument();
      expect(screen.getByText("b")).toBeInTheDocument();
      expect(screen.getByText("c")).toBeInTheDocument();
    });

    test("has correct color", () => {
      render(
        <BounceLetterLoader loading={true} letters="abc" color="rgb(0, 0, 0)" />
      );

      expect(screen.getByText("a")).toHaveStyle("color: rgb(0, 0, 0)");
      expect(screen.getByText("b")).toHaveStyle("color: rgb(0, 0, 0)");
      expect(screen.getByText("c")).toHaveStyle("color: rgb(0, 0, 0)");
    });

    test("has correct animation duration", () => {
      render(
        <BounceLetterLoader
          loading={true}
          letters="abc"
          animationDuration={5}
        />
      );

      expect(screen.getByText("a")).toHaveStyle("animationDuration: 5s");
      expect(screen.getByText("b")).toHaveStyle("animationDuration: 5s");
      expect(screen.getByText("c")).toHaveStyle("animationDuration: 5s");
    });

    test("does not display spinner", () => {
      render(<BounceLetterLoader loading={false} letters="abc" />);

      expect(screen.queryByText("a")).not.toBeInTheDocument();
      expect(screen.queryByText("b")).not.toBeInTheDocument();
      expect(screen.queryByText("c")).not.toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    test("displays correct message", () => {
      render(<BounceLetterLoaderOverlay message="loading message" />);

      expect(screen.getByText("loading message")).toBeInTheDocument();
    });

    test("displays correct bounce letter", () => {
      render(<BounceLetterLoaderOverlay letters="abc" />);

      expect(screen.getByText("a")).toBeInTheDocument();
      expect(screen.getByText("b")).toBeInTheDocument();
      expect(screen.getByText("c")).toBeInTheDocument();
    });

    test("has correct text color", () => {
      render(<BounceLetterLoaderOverlay letters="abc" color="rgb(0, 0, 0)" />);

      expect(screen.getByText("a")).toHaveStyle("color: rgb(0, 0, 0)");
      expect(screen.getByText("b")).toHaveStyle("color: rgb(0, 0, 0)");
      expect(screen.getByText("c")).toHaveStyle("color: rgb(0, 0, 0)");
    });

    test("does not display spinner", () => {
      render(<BounceLetterLoader loading={false} letters="abc" />);

      expect(screen.queryByText("a")).not.toBeInTheDocument();
      expect(screen.queryByText("b")).not.toBeInTheDocument();
      expect(screen.queryByText("c")).not.toBeInTheDocument();
    });
  });
});
