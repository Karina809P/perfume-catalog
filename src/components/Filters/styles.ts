import styled from 'styled-components';

export const FilterSection = styled.div`
  margin-bottom: 16px;
`;

export const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction:column;
  gap: 8px;
  margin-top: 12px;
`;

export const Button = styled.button`
  width: 80%;
  padding: 8px 12px;
  background-color:rgb(35, 54, 123);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: rgb(58, 86, 190);
  }
`;

export const ResetButton = styled.button`
  width: 80%;
  padding: 8px 12px;
  background-color:rgb(65, 65, 65);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: rgb(145, 145, 145);
    color: black;
  }
`;
