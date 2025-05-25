import React from 'react';
import { render, screen } from '@testing-library/react';
import OurClientCard from './OurClientCard';

describe('OurClientCard Component', () => {
  const props = {
    Quote: 'quote-icon.png',
    Avator: 'avatar.png',
    ourclientbg: 'bg-white',
    cardtextcolor: 'gray-800',
  };

  test('renders the quote image', () => {
    render(<OurClientCard {...props} />);
    const quoteImage = screen.getByAltText('image');
    expect(quoteImage).toBeInTheDocument();
    expect(quoteImage).toHaveAttribute('src', props.Quote);
  });

  test('renders the avatar image', () => {
    render(<OurClientCard {...props} />);
    const avatar = screen.getByAltText('Oberon Shaw');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', props.Avator);
  });

  test('renders the testimonial text', () => {
    render(<OurClientCard {...props} />);
    const text = screen.getByText(/Whitepate is designed as a collaboration tool/i);
    expect(text).toBeInTheDocument();
  });

 test('renders the name and designation', () => {
  render(<OurClientCard {...props} />);

  // Match across line breaks using regex
  expect(screen.getByText(/Oberon Shaw,/i)).toBeInTheDocument();
  expect(screen.getByText(/MCH/i)).toBeInTheDocument();
  expect(screen.getByText(/Head of Talent Acquisition/)).toBeInTheDocument();
  expect(screen.getByText(/North America/)).toBeInTheDocument();
});

});
