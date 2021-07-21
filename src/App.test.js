import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from '@testing-library/react';

import App from './App';

afterEach(cleanup)

it('app is loaded successfully!', () => {
  const {getByText} = render(<App />);

  expect(getByText(/Loaded/i).textContent).toBe("Loaded app in browser")
})