import { configureStore } from '@reduxjs/toolkit'

// reducers
import userReducer from '../reducer/user/userSlice'
import cartReducer from '../reducer/cart/cartSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
})
