import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addToCart } from '../../redux/cart/cartSlice';
import { Perfume } from '../../types/perfume';
import { CardWrapper } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  perfume: Perfume;
}

const PerfumeCard: React.FC<Props> = ({ perfume }) => {
  const dispatch = useAppDispatch();

  return (
    <CardWrapper>
      <Link to={`/perfume/${perfume.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={perfume.image} alt={perfume.name} />
        <h3>{perfume.name}</h3>
        <p>{perfume.brand} {perfume.gender}</p>
        <p>Ціна: ${perfume.price}</p>
      </Link>

      <button onClick={() => dispatch(addToCart(perfume))}>
        Додати до корзини
      </button>
    </CardWrapper>
  );
};

export default PerfumeCard;
