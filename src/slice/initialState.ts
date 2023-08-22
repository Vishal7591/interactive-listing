import { Product } from "../types/item/itemTypes";

export const initialState = {
  common: {
    loading: false,
    error: "",
    success: false,
    contents: [] as Product[]
  }
};