import { useParams, useNavigate } from 'react-router-dom';
import { Perfume } from '../types/perfume'; // або '../../types/perfume' залежно від шляху
import { fetchPerfumes } from '../redux/perfumes/perfumeAPI';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';
import { useEffect, useState } from 'react';

const PerfumeDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [perfume, setPerfume] = useState<Perfume | null>(null);

  useEffect(() => {
    const loadPerfume = async () => {
      const allPerfumes = await fetchPerfumes();
      const found = allPerfumes.find((p: Perfume) => p.id === Number(id));
      setPerfume(found || null);
    };
    loadPerfume();
  }, [id]);

  if (!perfume) return <p>Парфум не знайдено</p>;

  const handleAddToCart = () => {
    dispatch(addToCart(perfume));
  };

  return (
    <Wrapper>
      <Image src={perfume.image} alt={perfume.name} />
      <Info>
        <h2>{perfume.name}</h2>
        <p><strong>Бренд:</strong> {perfume.brand}</p>
        <p><strong>Стать:</strong> {perfume.gender}</p>
        <p><strong>Ціна:</strong> ${perfume.price}</p>
        <p><strong>Опис:</strong> {perfume.description}</p>

        <Buttons>
          <BackBtn onClick={() => navigate(-1)}>Назад</BackBtn>
          <CartBtn onClick={handleAddToCart}>Додати в корзину</CartBtn>
        </Buttons>
      </Info>
    </Wrapper>
  );
};

export default PerfumeDetailsPage;

// --- Styled Components ---
const Wrapper = styled.div`
  display: flex;
  gap: 2%;
  padding: 2rem;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 35%;
  height: 35%;
  border-radius: 12px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
  flex: 1;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1%;
`;

const BackBtn = styled.button`
  background-color: #ccc;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
`;

const CartBtn = styled.button`
  background-color: #2b8a3e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
`;
