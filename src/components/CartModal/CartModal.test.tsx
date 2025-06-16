// src/components/CartModal/CartModal.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartModal from './CartModal';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('CartModal', () => {
  let store: any;
  let onCloseMock: jest.Mock;
  let onCheckoutMock: jest.Mock;

  beforeEach(() => {
    onCloseMock = jest.fn();
    onCheckoutMock = jest.fn();

    store = mockStore({
      cart: {
        items: [
          {
            id: 1,
            name: 'Test Perfume',
            brand: 'TestBrand',
            gender: 'female',
            image: '/test.jpg',
            price: 100,
            quantity: 2,
          },
        ],
      },
    });

    // Для перехоплення дій Redux
    store.dispatch = jest.fn();
  });

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <CartModal onClose={onCloseMock} onCheckout={onCheckoutMock} />
      </Provider>
    );

  test('показує товари в корзині', () => {
    renderComponent();
    expect(screen.getByText(/Корзина \(2\)/)).toBeInTheDocument();
    expect(screen.getByText('Test Perfume')).toBeInTheDocument();
    expect(screen.getByText('TestBrand – female')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('натискання + викликає increaseQuantity', () => {
    renderComponent();
    const plusBtn = screen.getByText('+');
    fireEvent.click(plusBtn);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'cart/increaseQuantity',
      payload: 1,
    });
  });

  test('натискання - викликає decreaseQuantity', () => {
    renderComponent();
    const minusBtn = screen.getByText('−');
    fireEvent.click(minusBtn);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'cart/decreaseQuantity',
      payload: 1,
    });
  });

  test('натискання 🗑 викликає removeFromCart', () => {
    renderComponent();
    const removeBtn = screen.getByText('🗑');
    fireEvent.click(removeBtn);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'cart/removeFromCart',
      payload: 1,
    });
  });

  test('натискання очистити корзину викликає clearCart і onClose', () => {
    renderComponent();
    const clearBtn = screen.getByText('Очистити корзину');
    fireEvent.click(clearBtn);
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'cart/clearCart' });
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('натискання закрити викликає onClose', () => {
    renderComponent();
    const closeBtn = screen.getByText('Закрити');
    fireEvent.click(closeBtn);
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('натискання оформити замовлення викликає onCheckout', () => {
    renderComponent();
    const checkoutBtn = screen.getByText('Оформити замовлення');
    fireEvent.click(checkoutBtn);
    expect(onCheckoutMock).toHaveBeenCalled();
  });
});
