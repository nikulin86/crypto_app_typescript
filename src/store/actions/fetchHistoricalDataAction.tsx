import React, { useState } from 'react';
import { CryptoState } from '../../context/CryptoContext';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { HistoricalChart, TrendingCoins } from '../../config/api';
import axios from 'axios';
import { useEffect } from 'react';


export const fetchHistoricalDataAction = 
createAsyncThunk(
    "crypto/fetchHistoricalDataAction",
    
    async ({id, currency, days}: {id: string, currency: string, days: number}) => {
        const { data } = await axios.get(HistoricalChart(id, currency, days));
        console.log(data)
        return data
        
    });