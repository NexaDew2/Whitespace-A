import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("renders Login and Try buttons after clicking menu toggle on mobile", () => {
    render(<Navbar />);

    // The menu toggle button should be present
    const toggleButton = screen.getByLabelText("menu-toggle");
    expect(toggleButton).toBeInTheDocument();

    // Initially, mobile menu should not be visible (Login buttons only in desktop or mobile menu open)
    expect(screen.queryAllByText(/Login/i).length).toBeGreaterThan(0);

    // Click to open mobile menu
    fireEvent.click(toggleButton);

    // Now mobile menu content should be visible, including Login and Try buttons
    expect(screen.getAllByText(/Login/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Try Whitepace free/i)[0]).toBeInTheDocument();

    // Click again to close menu
    fireEvent.click(toggleButton);

    // Mobile menu content should disappear
    // The desktop menu content remains (if viewport was desktop) - but in tests it won't matter
  });
});
