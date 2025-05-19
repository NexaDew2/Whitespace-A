import React from 'react';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen', // Ensures the footer takes up the full viewport width in Storybook
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#1e3a8a' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MobileView = Template.bind({});
MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile1', // Simulates a mobile viewport (e.g., 375px width)
  },
};

export const TabletView = Template.bind({});
TabletView.parameters = {
  viewport: {
    defaultViewport: 'tablet', // Simulates a tablet viewport (e.g., 768px width)
  },
};