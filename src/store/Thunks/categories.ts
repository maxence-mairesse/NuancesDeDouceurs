import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../Utils/axios';

export const fetchCategory = createAsyncThunk('fetchCategory', async () => {
  const response = await instanceAxios.get('/categories');
  return response.data;
});
