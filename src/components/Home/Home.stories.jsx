import React from "react";
import Home from "./Home";

export default {
  title: "Components/Home",
  component: Home,
  args: {
    heroTitle: "Welcome to Our Website",
    heroDescription: "This is a customizable hero section.",
    heroButtonText: "Learn More",
    heroImage: "https://via.placeholder.com/400x300",
  },
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
  backgroundImage: "https://via.placeholder.com/1200x800",
  backgroundImageStyle: {
    size: "cover",
    position: "center",
    overlay: true,
  },
};

export const CenteredContent = Template.bind({});
CenteredContent.args = {
  isFullWidthCentered: true,
};

export const ImageOnLeft = Template.bind({});
ImageOnLeft.args = {
  imagePosition: "left",
};
