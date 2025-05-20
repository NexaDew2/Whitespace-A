import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  test("renders logo", () => {
    render(<Navbar />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  test("shows hamburger on mobile", () => {
    render(<Navbar />);
    const hamburger = screen.getByTestId("hamburger");
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).toHaveTextContent("☰");
  });

  test("toggles mobile menu on hamburger click", () => {
    render(<Navbar />);
    const hamburger = screen.getByTestId("hamburger");

    fireEvent.click(hamburger);
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();

    fireEvent.click(hamburger);
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });

  test("dropdown changes update state", () => {
    render(<Navbar />);
    const select = screen.getByTestId("select-Products");

    fireEvent.change(select, { target: { value: "2" } });
    expect(select.value).toBe("2");
  });

  test("renders buttons", () => {
    render(<Navbar />);
    expect(screen.getByTestId("login-btn")).toBeInTheDocument();
    expect(screen.getByTestId("try-btn")).toBeInTheDocument();
  });
});
