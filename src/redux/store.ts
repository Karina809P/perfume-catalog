import { configureStore } from '@reduxjs/toolkit';
import perfumeReducer from './perfumes/perfumeSlice';
import filterReducer from './filters/filterSlice';
import cartReducer from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    perfumes: perfumeReducer,
    filters: filterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
