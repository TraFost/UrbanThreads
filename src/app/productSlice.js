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
    addToCart: (state, action) => {
      const { id, price, qty } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.qty += qty;
        state.items += qty;
        state.total += price * qty;
      } else {
        state.cart = [...state.cart, action.payload];
        state.items += qty;
        state.total += price * qty;
      }
    },
    incrementTotalPrice: (state, action) => {
      const { id, price, qty, totalPrice } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.qty = qty;
        state.items += item.qty / qty;
        item.price = price;
        state.total += price * qty - totalPrice;
      }
    },
    decrementTotalPrice: (state, action) => {
      const { id, price, qty, totalPrice } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.qty = qty;
        if (item.qty === 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
        }
        state.items -= item.qty / qty;
        item.price = price;
        state.total -= totalPrice - price * qty;
      }
    },
    deleteFromCart: (state, action) => {
      const { id, totalPrice, qty } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      state.items -= qty;
      state.total -= totalPrice;
    },
    checkout: (state) => {
      state.cart = [];
      state.items = 0;
      state.total = 0;
    },
    // ** Cart Actions //
  },
});

export const {
  getProducts,
  deleteProduct,
  addProduct,
  editProduct,
  handleSearch,
  addToCart,
  incrementTotalPrice,
  decrementTotalPrice,
  deleteFromCart,
  checkout,
} = productSlice.actions;

export default productSlice.reducer;
