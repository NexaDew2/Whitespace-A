import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Our Site',
  subtitle: 'We provide awesome services',
  backgroundImage: 'https://via.placeholder.com/1200x400',
  buttonText: 'Get Started',
  onButtonClick: () => alert('Button clicked'),
};
