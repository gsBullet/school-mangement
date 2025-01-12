import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../../../../../store';
import { initialState } from '../inital_state';
import axios from 'axios';
import setup from '../../setup';
import { end_point } from '../../../../../../config/api';
import storeSlice from '..';
import { anyObject } from '../../../../../../common_types/object';

type ReturnType = void;
type PayloadType = { [key: string]: any };
type ThunkArgument = {
    dispatch: AppDispatch;
    state: typeof initialState;
};

const api_prefix = setup.api_prefix;
const store_prefix = setup.store_prefix;

const fetch_api = async (param: anyObject, thunkAPI) => {
    const state = thunkAPI.getState();
    const dispatch = thunkAPI.dispatch;

    dispatch(storeSlice.actions.set_is_loading(true));
    dispatch(storeSlice.actions.set_loading_text('fething data..'));

    // const response = await axios.get(
    //     `${end_point}/${api_prefix}/students/${param.id}`,
    // );
    const response = await axios.get(`${end_point}/${api_prefix}/classes`);

    dispatch(storeSlice.actions.set_is_loading(false));
    // dispatch(storeSlice.actions.set_item(response.data.data));
    dispatch(storeSlice.actions.set_class(response.data.data));

    return response.data;
    // thunkAPI.dispatch(storeSlice.actions.my_action())
};

export const classes = createAsyncThunk<ReturnType, PayloadType, ThunkArgument>(
    `${store_prefix}/classes`,
    fetch_api,
);
