import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authService } from '../services/auth.service'

export const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware),
})

setupListeners(store.dispatch)