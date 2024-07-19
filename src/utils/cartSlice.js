import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutuating our state
      state.items.push(action.payload);
    },
    removeItmes:(state,action)=>{
      const removeIndex=state.items.findIndex(item=>item.card.info.id === action.payload);
      state.items.payload(removeIndex,1);
    },
    
    clearCart: (state) => {
      state.items.length = [];
    },
    
  },
});
//  export const{addItem, removeItem, clearCart}=cartSlice.actions;
export const {
  addItem,
  removeItmes,
  clearCart,
 
} = cartSlice.actions;
export default cartSlice.reducer;
