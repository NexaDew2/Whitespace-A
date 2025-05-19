import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

// Mock the Footerlogo import since it's an image
jest.mock('../../assets', () => ({
  Footerlogo: 'mocked-footer-logo.png',
}));

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders the logo placeholder', () => {
    const logo = screen.getByAltText('');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'mocked-footer-logo.png');
    
  });

  test('renders the description text', () => {
    const description = screen.getByText(/Whitepace was created for the new ways we live and work/i);
    expect(description).toBeInTheDocument();
  });

  test('renders all section headings', () => {
    const headings = ['Product', 'Resources', 'Company', 'Try It Today'];
    headings.forEach((heading) => {
      expect(screen.getByText(heading)).toBeInTheDocument();
    });
  });

  test('renders Product section links', () => {
    const links = ['Overview', 'Pricing', 'Customer stories'];
    links.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', '#');
    });
  });

  test('renders Resources section links', () => {
    const links = ['Blog', 'Guides & tutorials', 'Help center'];
    links.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', '#');
    });
  });

  test('renders Company section links', () => {
    const links = ['About us', 'Careers', 'Media kit'];
    links.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', '#');
    });
  });

  test('renders Try It Today section with button', () => {
    const tryItText = screen.getByText(/Get started for free/i);
    expect(tryItText).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Start Today/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-400');
  });

  test('button has hover effect class', () => {
    const button = screen.getByRole('button', { name: /Start Today/i });
    expect(button).toHaveClass('hover:bg-blue-500');
  });

  test('renders bottom section links and text', () => {
    const bottomLinks = ['Terms & privacy', 'Security', 'Status'];
    bottomLinks.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', '#');
    });

    const copyright = screen.getByText(/©2021 Whitepace LLC/i);
    expect(copyright).toBeInTheDocument();
  });

  test('renders language selector', () => {
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('English');
  });

  test('renders social media icons with correct links', () => {
    const socialLinks = screen.getAllByRole('link', { name: '' });
    expect(socialLinks).toHaveLength(3); 

    const facebookIcon = screen.getByTestId('FacebookIcon');
    const twitterIcon = screen.getByTestId('TwitterIcon');
    const linkedInIcon = screen.getByTestId('LinkedInIcon');

    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
  });
});