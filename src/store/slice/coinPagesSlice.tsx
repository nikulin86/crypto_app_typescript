import React, { useEffect } from "react";
import { Description, HistoricalChart, ICoins, MarketData, RootObjectCoin } from "../../Types";
import { createSlice } from "@reduxjs/toolkit";
import { getCoinsPageAction } from '../actions/getCoinsPageAction';
import { fetchTrendingCoinAction } from './../actions/fetchTrendingCoinAction';
import { fetchCoinTableAction } from './../actions/fetchCoinTableAction';
import { fetchHistoricalDataAction } from './../actions/fetchHistoricalDataAction';

interface InitialState {
  coins: ICoins[];
  coinsCarusel: ICoins[];
  coinsPage: RootObjectCoin;
  historicalChart: HistoricalChart;
  // description: Description,
  // marketData: MarketData,
}
const initialState: InitialState = {
  coins: [],
  coinsCarusel: [],
  coinsPage: {
    id: "",
    name: "",
    image: {
      thumb: "",
      small: "",
      large: "",
    },
    description: {
      en: ""
    },
    market_cap_rank: 0,
    market_data: {
         current_price: {
           rub: 0,
           usd: 0,
         },
         market_cap: {
          rub: 0,
          usd: 0,
         }
    }
    // days: 1
    // marketData: {
    //   current_price
    // 0
  },
  historicalChart: {
    prices: []
  },
};

export const coinPagesSlice = createSlice({
  name: "coinApp",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getCoinsPageAction.fulfilled, (state, action) => {
      state.coinsPage = action.payload;
    });
    builder.addCase(fetchTrendingCoinAction.fulfilled, (state, action) => {
      state.coinsCarusel = action.payload;
    });
    builder.addCase(fetchCoinTableAction.fulfilled, (state, action) => {
      state.coins = action.payload;
    });
    builder.addCase(fetchHistoricalDataAction.fulfilled, (state, action) => {
      state.historicalChart = action.payload;
    });
  }
  
});



export default coinPagesSlice.reducer