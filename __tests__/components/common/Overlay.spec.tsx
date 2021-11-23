import { render, screen } from "@testing-library/react";
import { Overlay } from "../../../src/components/common/Overlay";
import React from "react";

describe("Overlay", () => {
  test("displays children", () => {
    render(<Overlay>children</Overlay>);

    expect(screen.getByText("children")).toBeInTheDocument();
  });

  test("displays correct message", () => {
    render(<Overlay message="loading message" />);

    expect(screen.getByText("loading message")).toBeInTheDocument();
  });

  test("has correct overlay color", () => {
    render(<Overlay overlayColor="rga(1, 1, 1)" />);

    expect(screen.queryByTestId("overlay")).toHaveStyle(
      "backgroundColor: rga(1, 1, 1)"
    );
  });

  test("has correct zIndex", () => {
    render(<Overlay zIndex={10} />);

    expect(screen.queryByTestId("overlay")).toHaveStyle("zIndex: 10");
  });
});
