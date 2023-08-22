import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { Product } from "../types/item/itemTypes";
import { API_URL } from "../constants/config";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async() => {
const response = await fetch(`${API_URL}/products`,
{
  method: "GET",
  headers: {
    Accept: "application/json"
  }
});
const responseJson = await response.json();
  return responseJson.products;
});

export type ThunkDispatch = typeof fetchProducts;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.common.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.common.loading = false;
      state.common.success = true;
      state.common.contents = action.payload as Product[];
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.common.loading = false;
      state.common.error = action.error.message as string;
    });
  }
});

export default productSlice.reducer;