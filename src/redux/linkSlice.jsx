import { createSlice } from '@reduxjs/toolkit';
const linkSlice = createSlice({
    name: 'link',
    initialState: {
        add: {
            isFetching: false,
            success: false,
            error: false,
        },
        getAll: {
            allLink: null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        addNewStart: (state) => {
            state.add.isFetching = true;
        },
        addNewSuccess: (state) => {
            state.add.isFetching = false;
            state.add.success = true;
        },
        addNewFailed: (state) => {
            state.add.isFetching = false;
            state.add.error = true;
        },
        getAllStart: (state) => {
            state.getAll.isFetching = true;
        },
        getAllSuccess: (state, action) => {
            state.getAll.isFetching = false;
            state.getAll.allLink = action.payload;
        },
        getAllFailed: (state) => {
            state.getAll.isFetching = false;
            state.getAll.error = true;
        },
    },
});
export const { addNewStart, addNewSuccess, addNewFailed, getAllStart, getAllSuccess, getAllFailed } = linkSlice.actions;
export default linkSlice.reducer;
