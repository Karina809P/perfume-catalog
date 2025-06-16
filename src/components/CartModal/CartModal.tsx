import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../../redux/cart/cartSlice';
import {
  Overlay,
  Modal,
  Item,
  ItemInfo,
  ItemImage,
  QuantityControls,
  Button,
  Title,
  TotalBlock,
  Actions,
  CheckoutButton
} from './styles';

interface Props {
  onClose: () => void;
  onCheckout: () => void;
}

const CartModal: React.FC<Props> = ({ onClose, onCheckout }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cart.items);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <Title>Корзина ({totalQuantity})</Title>
        {items.length === 0 ? (
          <p>Корзина порожня</p>
        ) : (
          <>
            {items.map(item => (
              <Item key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <div><strong>{item.name}</strong></div>
                  <div>{item.brand} – {item.gender}</div>
                  <QuantityControls>
                    <Button onClick={() => dispatch(decreaseQuantity(item.id))}>−</Button>
                    {item.quantity}
                    <Button onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
                    <Button onClick={() => dispatch(removeFromCart(item.id))}>🗑</Button>
                  </QuantityControls>
                </ItemInfo>
              </Item>
            ))}
            <TotalBlock>
              <p><strong>Всього:</strong> {totalQuantity} товарів</p>
              <p><strong>Загальна ціна:</strong> ${totalPrice.toFixed(2)}</p>
            </TotalBlock>
            <Actions>
              <div>
                <Button onClick={() => { dispatch(clearCart()); onClose(); }}>Очистити корзину</Button>
                <Button onClick={onClose}>Закрити</Button>
              </div>
              
                <CheckoutButton onClick={onCheckout}>Оформити замовлення</CheckoutButton>
              
            </Actions>
          </>
        )}
      </Modal>
    </Overlay>
  );
};

export default CartModal;
