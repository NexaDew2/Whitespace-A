import React from 'react';
import { Avator1, Avator2, Avator3, BlueQuote, WhiteQuote } from '../../assets';

// Import the component using require to avoid hoisting issues
const { default: OurClientCard } = require('./OurClientCard');

export default {
  title: 'Components/OurClientCard',
  component: OurClientCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    cardtextcolor: {
      control: 'text',
      defaultValue: 'gray-800',
    },
    ourclientbg: {
      control: 'text',
      defaultValue: 'bg-white',
    },
  },
};

const Template = (args) => <OurClientCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  Quote: BlueQuote,
  Avator: Avator1,
  ourclientbg: 'bg-white',
  cardtextcolor: 'gray-800',
};

export const DarkVariant = Template.bind({});
DarkVariant.args = {
  Quote: WhiteQuote,
  Avator: Avator2,
  ourclientbg: 'bg-blue-900',
  cardtextcolor: 'white',
};

export const MultipleCards = () => (
  <div className="flex flex-wrap gap-4 justify-center">
    <OurClientCard {...Default.args} />
    <OurClientCard {...DarkVariant.args} />
    <OurClientCard 
      Quote={WhiteQuote}
      Avator={Avator3}
      ourclientbg="bg-blue-800"
      cardtextcolor="white"
    />
  </div>
);