import setup_type from './setup_type';

const prefix: string = 'Class Routine Day Time';
const setup: setup_type = {
    prefix,
    module_name: 'branch_class_routine_day_times',

    route_prefix: 'branch-class-routine-day-times',

    api_host: location.origin,
    api_prefix: 'branch-class-routine-day-times',

    store_prefix: 'branchClassRoutineDayTime',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
