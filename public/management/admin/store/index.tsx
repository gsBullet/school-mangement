import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import commonStore from './slices/common_slice';
import user_branch_staff_slice from '../views/pages/user_management/user_branch_staff/config/store';
import user_admins_slice from '../views/pages/user_management/user_admins/config/store';
import user_staffs_slice from '../views/pages/user_management/user_staffs/config/store';
import user_teachers_slice from '../views/pages/user_management/user_teachers/config/store';
import user_parents_slice from '../views/pages/user_management/user_parents/config/store';
import user_students_slice from '../views/pages/user_management/user_students/config/store';
import user_branch_admins_slice from '../views/pages/user_management/user_branch_admins/config/store';
import branches_slice from '../views/pages/branch_management/branches/config/store';
import branch_buildings_slice from '../views/pages/branch_management/branch_buildings/config/store';
import branch_building_rooms_slice from '../views/pages/branch_management/branch_building_rooms/config/store';
import branch_transports_slice from '../views/pages/branch_management/branch_transports/config/store';
import branch_transport_drivers_slice from '../views/pages/branch_management/branch_transport_drivers/config/store';
import branch_classes_slice from '../views/pages/class_management/branch_classes/config/store';
import branch_class_fee_types_slice from '../views/pages/class_management/branch_class_fee_types/config/store';
import branch_class_fee_discounts_slice from '../views/pages/class_management/branch_class_fee_discounts/config/store';
import branch_class_fee_waivers_slice from '../views/pages/class_management/branch_class_fee_waivers/config/store';
import branch_class_fees_slice from '../views/pages/class_management/branch_class_fees/config/store';
import branch_class_routine_day_times_slice from '../views/pages/class_management/branch_class_routine_day_times/config/store';
import branch_class_resources_slice from '../views/pages/class_management/branch_class_resources/config/store';
import branch_class_subjects_slice from '../views/pages/class_management/branch_class_subjects/config/store';
import meeting_agendas_slice from '../views/pages/meeting_management/meeting_agendas/config/store';
import meetings_slice from '../views/pages/meeting_management/meetings/config/store';
// import fees_collections_slice from '../views/pages/account_management/fees_collections/config/store';
import loan_managements_slice from '../views/pages/account_management/loan_managements/config/store';
// import journals_slice from '../views/pages/account_management/journals/config/store';
import payrolls_slice from '../views/pages/account_management/payrolls/config/store';
import salary_payments_slice from '../views/pages/account_management/salary_payments/config/store';
import academic_calendars_slice from '../views/pages/calendar_management/academic_calendars/config/store';
import academic_calendar_event_types_slice from '../views/pages/calendar_management/academic_calendar_event_types/config/store';
import tasks_slice from '../views/pages/todo_management/tasks/config/store';
import tasks_variant_slice from '../views/pages/todo_management/task_variants/config/store';
import tasks_group_slice from '../views/pages/todo_management/task_groups/config/store';
import branch_class_sections_slice from '../views/pages/class_management/branch_class_sections/config/store';
import accounts_slice from '../views/pages/account_management/account/config/store';
import account_periods_slice from '../views/pages/account_management/account_periods/config/store';
import account_categories_slice from '../views/pages/account_management/account_categories/config/store';

const store = configureStore({
    reducer: {
        user_branch_staff: user_branch_staff_slice.reducer,
        common_store: commonStore.reducer,
        user_admins: user_admins_slice.reducer,
        user_staffs: user_staffs_slice.reducer,
        user_teachers: user_teachers_slice.reducer,
        user_parents: user_parents_slice.reducer,
        user_students: user_students_slice.reducer,
        user_branch_admins: user_branch_admins_slice.reducer,
        branches: branches_slice.reducer,
        branch_buildings: branch_buildings_slice.reducer,
        branch_building_rooms: branch_building_rooms_slice.reducer,
        branch_transports: branch_transports_slice.reducer,
        branch_transport_drivers: branch_transport_drivers_slice.reducer,
        branch_classes: branch_classes_slice.reducer,
        branch_class_fee_types: branch_class_fee_types_slice.reducer,
        branch_class_fee_discounts: branch_class_fee_discounts_slice.reducer,
        branch_class_fee_waivers: branch_class_fee_waivers_slice.reducer,
        branch_class_fees: branch_class_fees_slice.reducer,
        branch_class_routine_day_times:
            branch_class_routine_day_times_slice.reducer,
        branch_class_resources: branch_class_resources_slice.reducer,
        branch_class_subjects: branch_class_subjects_slice.reducer,
        meeting_agendas: meeting_agendas_slice.reducer,
        meetings: meetings_slice.reducer,
        // fees_collections: fees_collections_slice.reducer,
        loan_managements: loan_managements_slice.reducer,
        // journals: journals_slice.reducer,
        payrolls: payrolls_slice.reducer,
        academic_calendars: academic_calendars_slice.reducer,
        academic_calendar_event_types:
            academic_calendar_event_types_slice.reducer,
        salary_payments: salary_payments_slice.reducer,
        tasks: tasks_slice.reducer,
        task_variants: tasks_variant_slice.reducer,
        task_groups: tasks_group_slice.reducer,
        branch_class_sections: branch_class_sections_slice.reducer,
        accounts: accounts_slice.reducer,
        account_periods: account_periods_slice.reducer,
        account_categories: account_categories_slice.reducer,
    },
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
