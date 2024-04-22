import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../Utils/axios';

export const fetchPrestations = createAsyncThunk(
  'fetchPrestations',
  async () => {
    const response = await instanceAxios.get('/prestations');
    return response.data;
  }
);

export const fetchNews = createAsyncThunk('fetchNews', async () => {
  const response = await instanceAxios.get('/prestations/news');
  return response.data;
});
