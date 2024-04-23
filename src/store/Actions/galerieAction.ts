import { createAction } from '@reduxjs/toolkit';

export const selectImg = createAction<string | null>('selectImg');
export const closeImg = createAction('closeImg');
