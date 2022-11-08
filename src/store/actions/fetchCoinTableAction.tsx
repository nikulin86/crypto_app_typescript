import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CoinList } from '../../config/api';




export const fetchCoinTableAction = 
createAsyncThunk(
    "crypto/fetchCoinTableAction",
    
    async (currency: string) => {
        // const { currency } = CryptoState();

        const { data } = await axios.get(CoinList(currency));

        console.log(data)
        return data;
    })
    