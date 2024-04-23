import { createReducer } from '@reduxjs/toolkit';
import { fetchgalerie } from '../Thunks/galerie';
import { closeImg, selectImg } from '../Actions/galerieAction';

interface GallerieInterface {
  img: [{ id: number | null; name: string }];
  selectedImg: string | null;
}

const initialState: GallerieInterface = {
  img: [
    {
      id: null,
      name: '',
    },
  ],
  selectedImg: null,
};

const GalerieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchgalerie.fulfilled, (state, action) => {
      state.img = action.payload;
    })
    .addCase(selectImg, (state, action) => {
      state.selectedImg = action.payload;
    })
    .addCase(closeImg, (state, action) => {
      state.selectedImg = null;
    });
});

export default GalerieReducer;
