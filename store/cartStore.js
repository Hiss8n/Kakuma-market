import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: async (product) => {
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity = +1) }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    });
  },

  removeItemFromCart: async (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
  decreaseQty: async (id) => {
    set((state) => {
      const cart = state.map((item) => item.id == id);
      if (cart <= 0) {
        return cart;
      } else {
        [...cart, (cart.quantity = -1)];
      }
    });
  },

  updateItemFromCart: async (productId) => {},
  updateQuantity: async (productId, amount) => {},
  clearCart: async () => {
    set({ cart: [] });
  },
}));
