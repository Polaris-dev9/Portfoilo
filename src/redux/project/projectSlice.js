import { createSlice } from '@reduxjs/toolkit';
import awesomeBook from '../../media/project/awesome-books/image';
import blog from '../../media/project/blog-aap/image';
import stockMarket from '../../media/project/stock-market/image';
import massageCarolin from '../../media/project/massage-caroline/image';
import shopholic from '../../media/project/shopholic/image';
import events from '../../media/project/event/image';

const initialState = {
  projects: [
    blog,
    stockMarket,
    massageCarolin,
    shopholic,
    awesomeBook,
    events,
  ],
  modal: '',
};

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
});

export const { anything } = projectSlice.actions;
export default projectSlice.reducer;
