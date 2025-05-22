import React from 'react';
import { render, screen } from '@testing-library/react';
import PlanCardSection from './PlanCardSection';
import PriceCard from '../PriceCard/PriceCard';

// Mock the PriceCard component to isolate PlanCardSection testing
jest.mock('../PriceCard/PriceCard', () => jest.fn(() => null));

describe('PlanCardSection', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    PriceCard.mockClear();
  });

  test('renders the section title and description', () => {
    render(<PlanCardSection />);
    
    expect(screen.getByText('Choose Your Plan')).toBeInTheDocument();
    expect(screen.getByText(/Whether you want to get organized/)).toBeInTheDocument();
  });

  test('renders three PriceCard components with correct props', () => {
    render(<PlanCardSection />);
    
    expect(PriceCard).toHaveBeenCalledTimes(3);
    
    // Check the first PriceCard call (Free plan)
    expect(PriceCard.mock.calls[0][0]).toEqual({
      category: 'Free',
      price: 0,
      textColor: 'black',
      cardcolor: 'bg-white h-auto',
      cardpara: 'Capture ideas and find them quickly',
      btncolor: 'transparent',
    });

    // Check the second PriceCard call (Personal plan)
    expect(PriceCard.mock.calls[1][0]).toEqual({
      category: 'Personal',
      price: 11.99,
      priceColor: 'text-yellow-200',
      textColor: 'white',
      cardcolor: 'bg-blue-900 py-22 ',
      cardpara: 'Keep home and family on track',
      btncolor: 'blue-400',
    });

    // Check the third PriceCard call (Organization plan)
    expect(PriceCard.mock.calls[2][0]).toEqual({
      category: 'Organization',
      price: 49.99,
      textColor: 'black',
      cardcolor: 'bg-white h-auto',
      cardpara: 'Capture ideas and find them quickly',
    });
  });
});