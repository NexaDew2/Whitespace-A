import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test("renders the logo image", () => {
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test("renders all nav dropdowns with correct labels", () => {
    const dropdownLabels = ["Products", "Solutions", "Resources", "Pricing"];
    dropdownLabels.forEach((label) => {
      // MUI InputLabel is associated with a Select via aria-labelledby,
      // so use getByLabelText to find the select input by label
      const selectInput = screen.getByLabelText(label);
      expect(selectInput).toBeInTheDocument();
    });
  });

  test("renders login and try free buttons", () => {
    const loginButton = screen.getByRole("button", { name: /login/i });
    const tryFreeButton = screen.getByRole("button", { name: /try whitespace free/i });

    expect(loginButton).toBeInTheDocument();
    expect(tryFreeButton).toBeInTheDocument();
  });
});
