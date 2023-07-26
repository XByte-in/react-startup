import App from '../app';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('App.js', () => {
  it('Check if the App render very well', () => {
    //render our App properly
    render(<App />);
    screen.debug();
  });
});
