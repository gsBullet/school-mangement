import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import commonStore from './slices/common_slice';
import users from '../views/pages/users/config/store';
import user_students from '../views/pages/students/config/store';
import student_add_new from '../views/pages/add_new/config/store';
import student_payments from '../views/pages/payment/config/store';

const store = configureStore({
    reducer: {
        users: users.reducer,
        user_students: user_students.reducer,
        student_add_new: student_add_new.reducer,
        student_payments: student_payments.reducer,
        common_store: commonStore.reducer,
    },
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
