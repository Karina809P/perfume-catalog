import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { toggleCart } from '../../redux/cart/cartSlice';
import { FiShoppingCart } from 'react-icons/fi';
import cartIcon from '../../assets/icons/basket.jpg';
import logo from '../../assets/icons/logo.jpg'


import {
  HeaderContainer,
  Title,
  NavLinks,
  StyledLink,
  CartWrapper,
  IconWrapper,
  CartBadge,
} from './styles';

const Header: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const totalQuantity = useAppSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <HeaderContainer>
       <IconWrapper>
            <img src={logo} alt="Logo" />
        </IconWrapper>

      <NavLinks>
        <StyledLink to="/" $active={location.pathname === '/'}>
          Каталог
        </StyledLink>
        <StyledLink to="/about" $active={location.pathname === '/about'}>
          Про нас
        </StyledLink>
      </NavLinks>

      <CartWrapper onClick={() => dispatch(toggleCart())}>
        <IconWrapper>
            <img src={cartIcon} alt="Cart" />
        </IconWrapper>
        {totalQuantity > 0 && <CartBadge>{totalQuantity}</CartBadge>}
      </CartWrapper>

    </HeaderContainer>
  );
};

export default Header;
