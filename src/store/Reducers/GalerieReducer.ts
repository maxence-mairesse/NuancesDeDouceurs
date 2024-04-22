import { createReducer } from '@reduxjs/toolkit';
import { fetchgalerie } from '../Thunks/galerie';

interface GallerieInterface {
  img: [{ id: number | null; name: string }];
}

const initialState: GallerieInterface = {
  img: [
    {
      id: null,
      name: '',
    },
  ],
};

const GalerieReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchgalerie.fulfilled, (state, action) => {
    state.img = action.payload;
  });
});

export default GalerieReducer;
