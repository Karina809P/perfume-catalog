import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {store} from './redux/store';
import App from './App';

test('renders catalog link', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  
  const linkElement = screen.getByRole('link', { name: /каталог/i });
  // шукаємо текст "Каталог"
  expect(linkElement).toBeInTheDocument();
});
