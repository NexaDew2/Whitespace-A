import React from 'react';
import PlanCardSection from './PlanCardSection';

export default {
  title: 'Components/PlanCardSection',
  component: PlanCardSection,
  parameters: {
    layout: 'fullscreen', // Optional: Adjusts the layout in Storybook
  },
};

// Template for creating different story variations
const Template = (args) => <PlanCardSection {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {};

// You can add more story variations if needed
export const WithDifferentProps = Template.bind({});
WithDifferentProps.args = {
  // You would add props here if your component accepted any
  // Since your current component doesn't take props, this is just for demonstration
};

// Add any additional stories to showcase different states
export const MobileView = Template.bind({});
MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile1', // Shows how it looks on mobile
  },
};