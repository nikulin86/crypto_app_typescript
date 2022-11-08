import { createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
import { SingleCoin } from '../../config/api';

export const getCoinsPageAction = createAsyncThunk(
    "crypto/getCoinsPageAction",
    async (id: string | undefined) => {
        const response = await fetch(SingleCoin(id));

        const data = await response.json();
        console.log(data)
        return data;
    }
)