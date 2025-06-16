import React from 'react';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import AppRouter from './routes/AppRouter';
import CartModal from './components/CartModal/CartModal';
import GlobalStyle from './styles/GlobalStyle';
import { toggleCart, clearCart } from './redux/cart/cartSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(state => state.cart.isOpen);

  const handleCloseCart = () => {
    dispatch(toggleCart());
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    dispatch(toggleCart());
    
    alert('Замовлення оформлено!'); // можеш змінити на модалку або інший UX
  };

  return (
    <>
      <GlobalStyle />
      {isCartOpen && (
        <CartModal onClose={handleCloseCart} onCheckout={handleCheckout} />
      )}
      <AppRouter />
    </>
  );
};

export default App;
