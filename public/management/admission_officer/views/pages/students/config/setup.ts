import setup_type from './setup_type';

const prefix: string = 'User Students';
const setup: setup_type = {
    prefix,
    module_name: 'user_students',

    route_prefix: 'user-students',

    api_host: location.origin,
    api_prefix: 'user-students',

    store_prefix: 'userStudents',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
