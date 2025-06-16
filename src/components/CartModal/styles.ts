import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: rgb(239, 239, 239);
  padding: 24px;
  width: 450px;
  max-height: 85vh;
  overflow-y: auto;
  border-radius: 12px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Item = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  align-items: center;
`;

export const ItemImage = styled.img`
  width:20%;
  height: 20%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  background: rgb(143, 142, 142);
  color:white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgb(183, 182, 182);
    color: black;
  }
`;

export const TotalBlock = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;
export const Actions = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 12px;
  }
`;
export const CheckoutButton = styled.button`
  margin-left:8px;
  padding: 8px 16px;
  background-color: #007bff; /* Синій колір */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #0056b3;
  }
`;