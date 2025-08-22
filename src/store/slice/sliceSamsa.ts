import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

export interface Samsa {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Order extends Samsa {
  quantity: number;
}

interface SamsaState {
  samsas: Samsa[];
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: SamsaState = {
  samsas: [],
  orders: [],
  loading: false,
  error: null,
};

// Async thunks
export const fetchSamsas = createAsyncThunk("samsas/fetchSamsas", async () => {
  const res = await axios.get("http://localhost:3000/samsas");
  return res.data;
});

export const addSamsa = createAsyncThunk(
  "samsas/addSamsa",
  async (samsa: Omit<Samsa, "id">) => {
    const res = await axios.post("http://localhost:3000/samsas", samsa);
    return res.data;
  }
);

export const deleteSamsa = createAsyncThunk(
  "samsas/deleteSamsa",
  async (id: number) => {
    await axios.delete(`http://localhost:3000/samsas/${id}`);
    return id;
  }
);

export const updateSamsa = createAsyncThunk(
  "samsas/updateSamsa",
  async (samsa: Samsa) => {
    const res = await axios.put(`http://localhost:3000/samsas/${samsa.id}`, samsa);
    return res.data;
  }
);

const samsaSlice = createSlice({
  name: "samsas",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      const existing = state.orders.find(o => o.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.orders.push(action.payload);
      }
    },
    removeOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter(o => o.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSamsas.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchSamsas.fulfilled, (state, action) => { state.loading = false; state.samsas = action.payload; })
      .addCase(fetchSamsas.rejected, (state, action) => { state.loading = false; state.error = action.error.message || "Error fetching samsas"; })

      .addCase(addSamsa.fulfilled, (state, action) => { state.samsas.push(action.payload); })
      .addCase(deleteSamsa.fulfilled, (state, action) => { state.samsas = state.samsas.filter(s => s.id !== action.payload); })
      .addCase(updateSamsa.fulfilled, (state, action) => {
        const index = state.samsas.findIndex(s => s.id === action.payload.id);
        if (index !== -1) state.samsas[index] = action.payload;
      });
  },
});

export const { addOrder, removeOrder } = samsaSlice.actions;
export default samsaSlice.reducer;