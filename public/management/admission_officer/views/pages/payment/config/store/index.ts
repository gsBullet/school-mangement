import { createSlice } from '@reduxjs/toolkit';
import setup from '../setup';
import { initialState } from './inital_state';

import { all } from './async_actions/all';
import { categories } from './async_actions/category';
import { accounts } from './async_actions/account';
import { periods } from './async_actions/account_period';
import { receipt_books } from './async_actions/receipt_book';
import { sections } from './async_actions/sections';
import { branches } from './async_actions/branches';
import { shifts } from './async_actions/shifts';
import { details } from './async_actions/details';
import { store } from './async_actions/store';
import { update } from './async_actions/update';
import { soft_delete } from './async_actions/soft_delete';
import { restore } from './async_actions/restore';
import { destroy } from './async_actions/destroy';
import { import_data } from './async_actions/import_data';
import { store_reducers } from './reducers';

const storeSlice = createSlice({
    name: setup.store_prefix,
    initialState,
    reducers: store_reducers,
    extraReducers: (builder) => {
        builder
            .addCase(all.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(categories.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(accounts.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(
                receipt_books.fulfilled,
                (state, { type, payload, meta }) => {
                    // console.log(type, payload, meta);
                },
            )
            .addCase(periods.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(sections.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(branches.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(shifts.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(details.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(store.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(update.fulfilled, (state, { type, payload, meta }) => {
                console.log(type, payload, meta);
            })
            .addCase(restore.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(destroy.fulfilled, (state, { type, payload, meta }) => {
                // console.log(type, payload, meta);
            })
            .addCase(
                soft_delete.fulfilled,
                (state, { type, payload, meta }) => {
                    // console.log(type, payload, meta);
                },
            )
            .addCase(
                import_data.fulfilled,
                (state, { type, payload, meta }) => {
                    // console.log(type, payload, meta);
                },
            );
    },
});

export default storeSlice;
