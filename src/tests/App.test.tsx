import { getByTestId, getByText, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";
import App from "../App";

describe("App", () => {
  it("should change the article quantity in the navbar when a new article is added ", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText("Sunglasses"));
    await user.click(screen.getByText("Versace Sunglasses"));
    await user.click(screen.getByText("Add to Cart"));
    expect(screen.getByTestId("navbarQuantity").textContent).toMatch("4");
  });
});
