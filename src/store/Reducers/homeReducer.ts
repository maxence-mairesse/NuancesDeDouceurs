import { createReducer } from '@reduxjs/toolkit';
import { openMenu, CloseMenu } from '../Actions/homeAction';

const initialState = {
  menuIsOpen: false,
};

const HomeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openMenu, (state, action) => {
      state.menuIsOpen = !state.menuIsOpen;
    })
    .addCase(CloseMenu, (state, action) => {
      state.menuIsOpen = false;
    });
});

export default HomeReducer;
