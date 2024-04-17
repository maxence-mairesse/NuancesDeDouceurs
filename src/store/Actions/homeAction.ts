import { createAction } from '@reduxjs/toolkit';

export const fetchHome = createAction('fetchHome');

export const openMenu = createAction('OpenMenu');
export const openCarteMenu = createAction('OpenCarteMenu');
export const CloseMenu = createAction('CloseMenu');
