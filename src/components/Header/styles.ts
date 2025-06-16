import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdfdfd;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  margin-right: auto;
  margin-left: 40px;
`;

export const StyledLink = styled(Link)<{ $active?: boolean }>`
  text-decoration: none;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  color: ${({ $active }) => ($active ? '#007bff' : '#333')};
  border-bottom: ${({ $active }) => ($active ? '2px solid #007bff' : 'none')};
  padding-bottom: 2px;
`;

export const CartWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CartBadge = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
`;
