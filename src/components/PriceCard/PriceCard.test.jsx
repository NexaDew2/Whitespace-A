import React from 'react';
import { render, screen } from '@testing-library/react';
import PriceCard from './PriceCard';

describe('PriceCard Component', () => {
  const defaultProps = {
    category: 'Free',
    price: 0,
    cardpara: 'Capture ideas and find them quickly',
    textColor: 'black',
    cardcolor: 'bg-white',
    btncolor: 'transparent',
    priceColor: 'text-black',
  };

  test('renders category, price, and paragraph correctly', () => {
    render(<PriceCard {...defaultProps} />);
    
    expect(screen.getByText('Free')).toBeInTheDocument();
    expect(screen.getByText('$0')).toBeInTheDocument();
    expect(screen.getByText('Capture ideas and find them quickly')).toBeInTheDocument();
  });

  test('renders all list items', () => {
    render(<PriceCard {...defaultProps} />);
    
    expect(screen.getByText('Sync unlimited devices')).toBeInTheDocument();
    expect(screen.getByText('10 GB monthly uploads')).toBeInTheDocument();
    expect(screen.getByText('200 MB max. note size')).toBeInTheDocument();
    expect(screen.getByText('Customize Home dashboard and access extra widgets')).toBeInTheDocument();
    expect(screen.getByText('Connect primary Google Calendar account')).toBeInTheDocument();
    expect(screen.getByText('Add due dates, reminders, and notifications to your tasks')).toBeInTheDocument();
  });

  test('renders the Get Started button', () => {
    render(<PriceCard {...defaultProps} />);
    
    const button = screen.getByText('Get Started');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-transparent');
  });

  test('applies correct text color to elements', () => {
    render(<PriceCard {...defaultProps} />);
    
    const category = screen.getByText('Free');
    const paragraph = screen.getByText('Capture ideas and find them quickly');
    expect(category).toHaveClass('text-black');
    expect(paragraph).toHaveClass('text-black');
  });

  test('applies correct price color', () => {
    render(<PriceCard {...defaultProps} />);
    
    const price = screen.getByText('$0');
    expect(price).toHaveClass('text-black');
  });
});