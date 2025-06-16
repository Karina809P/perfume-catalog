import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 1rem auto;
  padding: 0 1rem;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;
export const PageWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const FiltersWrapper = styled.div`
  width: 25%;
`;

export const CatalogWrapper = styled.div`
  width: 72%;
`;
export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  align-items: center;
  margin-top:2% ;
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 32px 8px 8px;
  font-size: 16px;
  border-radius:16px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
`;
