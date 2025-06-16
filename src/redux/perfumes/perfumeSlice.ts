import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Perfume } from "../../types/perfume";
import { fetchPerfumes } from "./perfumeAPI";

interface PerfumeState {
  perfumes: Perfume[];
  loading: boolean;
  error: string | null;
}

const initialState: PerfumeState = {
  perfumes: [],
  loading: false,
  error: null,
};

export const loadPerfumes = createAsyncThunk(
  "perfumes/loadPerfumes",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPerfumes();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const perfumeSlice = createSlice({
  name: "perfumes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPerfumes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPerfumes.fulfilled, (state, action) => {
        state.loading = false;
        state.perfumes = action.payload;
      })
      .addCase(loadPerfumes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default perfumeSlice.reducer;
