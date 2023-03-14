import { createSlice } from "@reduxjs/toolkit";
import pb from "../lib/pocketbase";

const initialState = {
  products: [],
  cart: [],
  items: 0,
  total: 0,
  searchField: "",
};

export const fetchProducts = async (dispatch) => {
  try {
    pb.autoCancellation(false);
    const { items } = await pb.collection("products").getList(1, 10);

    const data = JSON.stringify(items);
    const actualData = JSON.parse(data);

    dispatch(getProducts(actualData));
  } catch (err) {
    console.log(err);
  }
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // ** Product Actions //
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    editProduct: (state, action) => {
      state.products = state.products.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload,
          };
        }
        return item;
      });
    },
    deleteProduct: (state, action) => {
      const updated = state.products.filter((item) => {
        return item.id !== action.payload.id;
      });
      if (updated.length > 0) {
        state.products = updated;
      } else {
        state.products = [];
      }
    },
    handleSearch: (state, action) => {
      state.searchField = action.payload;
    },
    // ** Product Actions //

    // ** Cart Actions //
  },
});

export const {
  getProducts,
  deleteProduct,
  addProduct,
  editProduct,
  handleSearch,
} = productSlice.actions;

export default productSlice.reducer;
