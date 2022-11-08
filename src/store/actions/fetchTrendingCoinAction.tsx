import React, { useState } from 'react';
import { CryptoState } from '../../context/CryptoContext';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrendingCoins } from '../../config/api';
import axios from 'axios';
import { useEffect } from 'react';


export const fetchTrendingCoinAction = 
createAsyncThunk(
    "crypto/fetchTrendingCoinAction",
    
    async (currency: string) => {
        const { data } = await axios.get(TrendingCoins(currency));

        console.log(data)
        return data;
    })
    


