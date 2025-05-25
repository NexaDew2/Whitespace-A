import React from 'react';
import PriceCard from './PriceCard';

export default {
  title: 'Components/PriceCard',
  component: PriceCard,
  argTypes: {
    category: { control: 'text' },
    price: { control: 'number' },
    cardpara: { control: 'text' },
    textColor: { control: 'text' },
    cardcolor: { control: 'text' },
    btncolor: { control: 'text' },
    priceColor: { control: 'text' },
  },
};

const Template = (args) => <PriceCard {...args} />;

export const FreePlan = Template.bind({});
FreePlan.args = {
  category: 'Free',
  price: 0,
  cardpara: 'Capture ideas and find them quickly',
  textColor: 'black',
  cardcolor: 'bg-white',
  btncolor: 'transparent',
  priceColor: 'text-black',
};

export const PersonalPlan = Template.bind({});
PersonalPlan.args = {
  category: 'Personal',
  price: 11.99,
  cardpara: 'Keep home and family on track',
  textColor: 'white',
  cardcolor: 'bg-blue-900',
  btncolor: 'blue-400',
  priceColor: 'text-white',
};

export const OrganizationPlan = Template.bind({});
OrganizationPlan.args = {
  category: 'Organization',
  price: 49.99,
  cardpara: 'Capture ideas and find them quickly',
  textColor: 'black',
  cardcolor: 'bg-white',
  btncolor: 'transparent',
  priceColor: 'text-black',
};