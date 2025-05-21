import React from 'react';
import { render, screen } from '@testing-library/react';
import Sponser from './Sponser';

// Mock the image imports
jest.mock('../../assets', () => ({
  apple: 'apple.png',
  google: 'google.png',
  microsoft: 'microsoft.png',
  slack: 'slack.png',
}));

describe('Sponser Component', () => {
  test('renders the title correctly', () => {
    render(<Sponser />);
    const title = screen.getByText('Our Sponser');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-5xl', 'font-bold', 'text-center', 'p-20');
  });

  test('renders all sponsor images with correct alt text', () => {
    render(<Sponser />);
    
    const appleImg = screen.getByAltText('Apple logo');
    const googleImg = screen.getByAltText('Google logo');
    const microsoftImg = screen.getByAltText('Microsoft logo');
    const slackImg = screen.getByAltText('Slack logo');

    expect(appleImg).toBeInTheDocument();
    expect(googleImg).toBeInTheDocument();
    expect(microsoftImg).toBeInTheDocument();
    expect(slackImg).toBeInTheDocument();

    expect(appleImg).toHaveAttribute('src', 'apple.png');
    expect(googleImg).toHaveAttribute('src', 'google.png');
    expect(microsoftImg).toHaveAttribute('src', 'microsoft.png');
    expect(slackImg).toHaveAttribute('src', 'slack.png');
  });

  test('applies correct layout classes for small and medium screens', () => {
    render(<Sponser />);
    const imageSection = screen.getByRole('img', { name: 'Apple logo' }).parentElement;
    expect(imageSection).toHaveClass('flex', 'flex-col', 'md:flex-row', 'md:flex-wrap', 'gap-10');
  });

  test('applies correct gap for large screens', () => {
    render(<Sponser />);
    const imageSection = screen.getByRole('img', { name: 'Apple logo' }).parentElement;
    expect(imageSection).toHaveClass('lg:gap-20');
  });
});