import React from 'react';
import { render, screen } from '@testing-library/react';
import OurClientSection from './OurClientSection';

// Mock the assets imports
jest.mock('../../assets', () => ({
  Avator1: 'test-avator1.webp',
  Avator2: 'test-avator2.webp',
  Avator3: 'test-avator3.webp',
  BlueQuote: 'test-blue-quote.svg',
  WhiteQuote: 'test-white-quote.svg',
}));

// Mock the OurClientCard component
jest.mock('../OurClientCard/OurClientCard', () => 
  jest.fn(({ Quote, Avator, ourclientbg, cardtextcolor }) => (
    <div data-testid="mock-client-card" 
         className={`${ourclientbg} ${cardtextcolor}`}>
      Mock Client Card (Avator: {Avator}, Quote: {Quote})
    </div>
  ))
);

describe('OurClientSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the section title correctly', () => {
    render(<OurClientSection />);
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument();
    expect(screen.getByText('What Our Clients Say')).toHaveClass('text-5xl');
  });

  test('renders three OurClientCard components', () => {
    render(<OurClientSection />);
    const cards = screen.getAllByTestId('mock-client-card');
    expect(cards).toHaveLength(3);
  });

});