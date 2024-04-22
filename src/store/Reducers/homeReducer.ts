import { createReducer } from '@reduxjs/toolkit';
import { openMenu, CloseMenu } from '../Actions/homeAction';
import { fetchNews } from '../Thunks/prestations';

interface homeState {
  menuIsOpen: boolean;
  news: [
    {
      id: number | null;
      prestation: string;
      description: string;
      price: number;
      time: string;
      categorie_id: number | null;
    }
  ];
}

const initialState = {
  menuIsOpen: false,
  news: [
    {
      id: null,
      prestation: '',
      description: '',
      price: 0,
      time: '',
      categorie_id: null,
    },
  ],
};

const HomeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openMenu, (state, action) => {
      state.menuIsOpen = !state.menuIsOpen;
    })
    .addCase(CloseMenu, (state, action) => {
      state.menuIsOpen = false;
    })
    .addCase(fetchNews.fulfilled, (state, action) => {
      for (const stateElement of action.payload) {
        const hour = parseInt(stateElement.time.split(':')[0]);
        const min = parseInt(stateElement.time.split(':')[1]);

        if (hour === 0) {
          stateElement.time = `${min}min`;
        } else if (hour > 0 && min > 0) {
          stateElement.time = `${hour}h${min}`;
        } else if (hour > 0) {
          stateElement.time = `${hour}h`;
        }
      }

      state.news = action.payload;
    });
});

export default HomeReducer;
