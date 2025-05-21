import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './hero';

const baseProps = {
  heroTitle: 'Test Title',
  heroDescription: 'Test Description',
  heroButtonText: 'Click Me',
  heroImage: 'test-image.png',
};

describe('Hero Component', () => {
  test('renders empty style object when no backgroundImage', () => {
    const { container } = render(<Hero {...baseProps} backgroundImage={null} />);
    const section = container.querySelector('section');
    expect(section.style.backgroundImage).toBe('');
  });

  test('renders overlay div when backgroundImageStyle.overlay is true', () => {
    const { container } = render(
      <Hero {...baseProps} backgroundImage="test.jpg" backgroundImageStyle={{ overlay: true }} />
    );
    const overlayDiv = container.querySelector('section > div:first-child');
    expect(overlayDiv).toBeDefined();
    expect(overlayDiv).toHaveStyle({
      position: 'absolute',
      inset: '0',
      'background-color': 'rgba(0,0,0,0.4)',
      'z-index': '0',
    });
  });

  

  // Add your other tests here...
});
