import React from 'react';
import Sponser from './Sponser';
import { apple, google, microsoft, slack } from '../../assets';

export default {
  title: 'Components/Sponser',
  component: Sponser,
  argTypes: {
    title: { control: 'text' },
    appleSrc: { control: 'text' },
    googleSrc: { control: 'text' },
    microsoftSrc: { control: 'text' },
    slackSrc: { control: 'text' },
  },
};

const Template = (args) => (
  <div className="py-20">
    <div className="bg-white py-20">
      <h1 className="text-5xl font-bold text-center p-20">{args.title}</h1>
      <div className="imagesection justify-center items-center flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap gap-10 lg:gap-20">
        <img src={args.appleSrc} className="w-fit h-auto" alt="Apple logo" />
        <img src={args.googleSrc} className="w-fit h-auto" alt="Google logo" />
        <img src={args.microsoftSrc} className="w-fit h-auto" alt="Microsoft logo" />
        <img src={args.slackSrc} className="w-fit h-auto" alt="Slack logo" />
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Our Sponser',
  appleSrc: apple,
  googleSrc: google,
  microsoftSrc: microsoft,
  slackSrc: slack,
};