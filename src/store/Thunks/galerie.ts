import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../Utils/axios';

export const fetchgalerie = createAsyncThunk('fetchgalerie', async () => {
  const response = await instanceAxios.get('/galerie');
  return response.data;
});
