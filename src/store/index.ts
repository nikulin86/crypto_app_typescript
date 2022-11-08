import { combineReducers, configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./slice/coinPagesSlice"

const rootReducer = combineReducers({
    coinApp: coinsReducer,
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}



export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];