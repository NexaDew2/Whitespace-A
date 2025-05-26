import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

const defaultProps = {
  heroTitle: "Welcome to Our Site",
  heroDescription: "This is the best place to be.",
  heroButtonText: "Get Started",
  heroImage: "https://example.com/hero.jpg",
  imagePosition: "right",
  backgroundImage: "https://example.com/bg.jpg",
  backgroundClass: "bg-custom",
  textColorClass: "text-black",
  extraPaddingClass: "py-12",
};

describe("Home Component", () => {
  test("renders without crashing and displays all main content", () => {
    render(<Home {...defaultProps} />);

    // Check section with role region and testid
    const section = screen.getByRole("region", { name: "" }) || screen.getByTestId("home-section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass(defaultProps.backgroundClass);
    expect(section).toHaveStyle(`background-image: url(${defaultProps.backgroundImage})`);

    // Title and description text
    expect(screen.getByText(defaultProps.heroTitle)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.heroDescription)).toBeInTheDocument();

    // Button
    const btn = screen.getByRole("button", { name: defaultProps.heroButtonText });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveStyle("background-color: #4F9CF7");
    expect(btn).not.toHaveClass("mx-auto"); // centerButton is false by default

    // Image
    const img = screen.getByAltText("Hero");
    expect(img).toHaveAttribute("src", defaultProps.heroImage);
  });

  test("button has mx-auto class when centerButton is true", () => {
    render(<Home {...defaultProps} centerButton={true} />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("mx-auto");
  });

  test("imagePosition right places text first and image second", () => {
    render(<Home {...defaultProps} imagePosition="right" />);
    const textSection = screen.getByText(defaultProps.heroTitle).parentElement;
    const imgSection = screen.getByAltText("Hero").parentElement;
    expect(textSection).toHaveClass("order-1");
    expect(imgSection).toHaveClass("order-2");
  });

  test("imagePosition left places image first and text second", () => {
    render(<Home {...defaultProps} imagePosition="left" />);
    const textSection = screen.getByText(defaultProps.heroTitle).parentElement;
    const imgSection = screen.getByAltText("Hero").parentElement;
    expect(textSection).toHaveClass("order-2");
    expect(imgSection).toHaveClass("order-1");
  });

  test("isFullWidthCentered adjusts layout and text alignment", () => {
    render(<Home {...defaultProps} isFullWidthCentered={true} />);
    const container = screen.getByTestId("container");
    expect(container).toHaveClass("justify-center");

    const textSection = screen.getByText(defaultProps.heroTitle).parentElement;
    expect(textSection).toHaveClass("max-w-4xl");
    expect(textSection).toHaveClass("mx-auto");
    expect(textSection).toHaveClass("lg:text-center");
  });

  test("renders correctly without heroImage", () => {
    render(<Home {...defaultProps} heroImage={null} />);
    expect(screen.queryByAltText("Hero")).toBeNull();
  });

  test("applies background overlay color and blend mode when overlay is true", () => {
    const bgStyle = {
      overlay: true,
      customOverlayColor: "rgba(255,0,0,0.5)",
    };
    render(<Home {...defaultProps} backgroundImageStyle={bgStyle} />);
    const section = screen.getByTestId("home-section");
    expect(section).toHaveStyle("background-blend-mode: overlay");
    expect(section).toHaveStyle("background-color: rgba(255,0,0,0.5)");
  });
});
