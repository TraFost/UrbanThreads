import { createSlice } from "@reduxjs/toolkit";
import pb from "../lib/pocketbase";

const initialState = {
  products: [],
  cart: [],
  edit: [],
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
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    deleteProduct: (state, action) => {
      const updated = state.products.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.products = updated;
    },
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    // addToCart: (state, action) => {
    //   state.cart = [...state.cart, { ...action.payload }]; // action.payload is the product, so what we pass into the action is an object
    //   state.items = state.cart.length;
    //   state.total = state.cart.reduce((acc, item) => acc + item.price, 0);
    // },
  },
});

export const { getProducts, deleteProduct, addProduct } = productSlice.actions;

export default productSlice.reducer;
