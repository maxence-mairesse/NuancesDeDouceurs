import { createReducer } from '@reduxjs/toolkit';
import { fetchCategory } from '../Thunks/categories';
import { fetchPrestations } from '../Thunks/prestations';
import { openCarteMenu } from '../Actions/homeAction';

interface StateCategory {
  ArrayCategory: [
    {
      id: number | null;
      name: string;
    }
  ];

  ArrayPrestations: [
    {
      id: number | null;
      prestation: string;
      description: string;
      price: number;
      time: string;
      categorie_id: number | null;
    }
  ];
  menuOpen: [boolean, boolean, boolean, boolean, boolean];
}

const initialState: StateCategory = {
  ArrayCategory: [
    {
      id: null,
      name: '',
    },
  ],
  ArrayPrestations: [
    {
      id: null,
      prestation: '',
      description: '',
      price: 0,
      time: '',
      categorie_id: null,
    },
  ],
  menuOpen: [false, false, false, false, false],
};

const CategoryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCategory.fulfilled, (state, action) => {
      state.ArrayCategory = action.payload;
    })
    .addCase(fetchPrestations.fulfilled, (state, action) => {
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

      state.ArrayPrestations = action.payload;
    })
    .addCase(openCarteMenu, (state, action) => {
      const index: any = action.payload;
      state.menuOpen[index] = !state.menuOpen[index];
    });
});

export default CategoryReducer;
