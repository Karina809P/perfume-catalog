import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

interface PageButtonProps {
  active: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  padding: 0.5rem 0.8rem;
  border: none;
  background-color: ${({ active }) => (active ? '#23367B' : ' #9AB1F3')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #555;
    color: white;
  }
`;
