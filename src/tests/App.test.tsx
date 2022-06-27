import { render } from "@testing-library/react";
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
    expect(screen.getByTestId("finalPrize").textContent).toMatch(
      "Final Prize: 460 €"
    );
    let deleteButtons = screen.getAllByText("Delete");
    expect(deleteButtons.length).toBe(2);
    await user.click(deleteButtons[1]);
    expect(screen.getByTestId("navbarQuantity").textContent).toMatch("3");
    expect(screen.getByTestId("finalPrize").textContent).toMatch(
      "Final Prize: 240 €"
    );
    expect(screen.queryByText("Versace Sunglasses")).not.toBeInTheDocument();
    const quantityInput = screen.getAllByTestId("quantityInput");
    await user.clear(quantityInput[0]);
    await user.type(quantityInput[0], "4");
    expect(screen.getByTestId("navbarQuantity").textContent).toBe("4");
    expect(screen.getByTestId("finalPrize")).toHaveTextContent(
      "Final Prize: 320 €"
    );
  });
});
