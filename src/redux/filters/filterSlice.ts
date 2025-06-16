import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  name: string;
  brand: string;
  gender: string;
}

const initialState: FilterState = {
  name: '',
  brand: '',
  gender: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setBrand(state, action: PayloadAction<string>) {
      state.brand = action.payload;
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
  },
});

export const { setName, setBrand, setGender } = filterSlice.actions;
export default filterSlice.reducer;
