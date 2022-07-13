import { configureStore } from "@reduxjs/toolkit"

import { 
	countryReducer
} from "./reducers"

const store = configureStore({
	reducer: {
		symbol: countryReducer,
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
