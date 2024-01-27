import { configureStore } from '@reduxjs/toolkit';
import linkSlice from './linkSlice';
const store = configureStore({
    reducer: {
        link: linkSlice,
    },
});
export default store;
