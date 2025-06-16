import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 35%;
  height: 75%;
  border: 2px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    width: 55%;
    height: 50%;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 4px;
  }

  h3 {
    font-size: 1.1rem;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    margin: 0;
  }

  button {
    margin-bottom: 1%;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color:rgb(35, 54, 123);
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color:rgb(58, 86, 190);
    }
  }
`;
