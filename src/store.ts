import { configureStore } from "@reduxjs/toolkit"

import { 
	// themeReducer,
	countryReducer,
	// intradayReducer,
	// dailyReducer,
	// weeklyReducer,
	// monthlyReducer,
	// latestPriceReducer,
	// technicalIndicatorsReducer
} from "./reducers"

const store = configureStore({
	reducer: {
		// theme: themeReducer,
		symbol: countryReducer,
		// intraday: intradayReducer,
		// daily: dailyReducer,
		// weekly: weeklyReducer,
		// monthly: monthlyReducer,
		// latestPrice: latestPriceReducer,
		// technicalIndicators: technicalIndicatorsReducer,
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
