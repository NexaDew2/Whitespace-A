import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

const defaultProps = {
  heroTitle: "Welcome",
  heroDescription: "This is the hero section.",
  heroButtonText: "Get Started",
  heroImage: "https://via.placeholder.com/300",
};

describe("Home Component", () => {
  it("renders button", () => {
    render(<Home {...defaultProps} />);
    
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<Home {...defaultProps} />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    
  });
  it("renders description", () => {
    render(<Home {...defaultProps} />);
   
    expect(screen.getByText("This is the hero section.")).toBeInTheDocument();
    
  });

  

  it("renders hero image when not centered", () => {
    render(<Home {...defaultProps} />);
    const img = screen.getByAltText("Welcome");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", defaultProps.heroImage);
  });

  it("does not render image when isFullWidthCentered is true", () => {
    render(<Home {...defaultProps} isFullWidthCentered={true} />);
    const img = screen.queryByAltText("Welcome");
    expect(img).not.toBeInTheDocument();
  });

  it("applies background overlay when specified", () => {
    render(
      <Home
        {...defaultProps}
        backgroundImage="https://example.com/bg.jpg"
        backgroundImageStyle={{ overlay: true }}
      />
    );
    const overlay = screen.getByTestId("background-overlay");
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveStyle("background-color: rgba(0,0,0,0.4)");
  });
});
