import React from "react";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: "The main navigation bar with logo, dropdown menus, and action buttons for login and trial.",
      },
    },
  },
};

export const Default = () => <Navbar />;
export const Variant = () => <Navbar />;
