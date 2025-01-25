import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface CartState {
  items: Produto[]
  favorites: Produto[]
}

const initialState: CartState = {
  items: [],
  favorites: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Se o item já existe, você pode optar por incrementar a quantidade
        // ou simplesmente não adicionar novamente
        console.log('Item já está no carrinho');
      } else {
        state.items.push(action.payload);
      }
    },
    toggleFavorite: (state, action: PayloadAction<Produto>) => {
      const index = state.favorites.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        state.favorites.splice(index, 1)
      } else {
        state.favorites.push(action.payload)
      }
    },
  },
})

export const { addToCart, toggleFavorite } = cartSlice.actions
export default cartSlice.reducer
