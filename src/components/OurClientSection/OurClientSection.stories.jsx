import React from 'react';
import OurClientSection from './OurClientSection';
import { Avator1, Avator2, Avator3, BlueQuote, WhiteQuote } from '../../assets';

export default {
  title: 'Components/OurClientSection',
  component: OurClientSection,
  parameters: {
    layout: 'fullscreen', // Optional: Adjusts the layout in Storybook
  },
};

// Default story (shows all three client cards)
export const Default = () => <OurClientSection />;

// Story with only the first (white background) client card
export const FirstClientCard = () => (
  <OurClientSection>
    <div className="flex justify-center">
      <OurClientCard 
        Quote={BlueQuote} 
        Avator={Avator1} 
        ourclientbg="bg-white" 
        cardtextcolor="gray-900" 
      />
    </div>
  </OurClientSection>
);

// Story with only the second (blue background) client card
export const SecondClientCard = () => (
  <OurClientSection>
    <div className="flex justify-center">
      <OurClientCard 
        Quote={WhiteQuote} 
        Avator={Avator2} 
        ourclientbg="bg-blue-400" 
        cardtextcolor="white" 
      />
    </div>
  </OurClientSection>
);

// Story with mobile view
export const MobileView = () => <OurClientSection />;
MobileView.parameters = {
  viewport: {
    defaultViewport: 'iphonex', // Shows mobile responsiveness
  },
};