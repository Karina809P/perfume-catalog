import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  padding: 1rem;
  text-align: center;
`;

const NotFound = () => (
  <Container>
    <h1>404 - Сторінку не знайдено</h1>
    <p>Вибачте, такої сторінки не існує.</p>
  </Container>
);

export default NotFound;
