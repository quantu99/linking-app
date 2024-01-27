import axios from 'axios';
import { addNewFailed, addNewStart, addNewSuccess, getAllFailed, getAllStart, getAllSuccess } from './linkSlice';

export const addNewLink = async (link, dispatch) => {
    dispatch(addNewStart());
    try {
        const res = await axios.post('https://linking-hosa.onrender.com/v1/link/add', link);
        dispatch(addNewSuccess(res.data));
    } catch (err) {
        dispatch(addNewFailed());
    }
};
export const getAllLink = async (dispatch) => {
    dispatch(getAllStart());
    try {
        const res = await axios.get('https://linking-hosa.onrender.com/v1/link/all');
        dispatch(getAllSuccess(res.data));
    } catch (err) {
        dispatch(getAllFailed());
    }
};
