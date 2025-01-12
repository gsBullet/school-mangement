import setup_type from './setup_type';

const prefix: string = 'Student';
const setup: setup_type = {
    prefix,
    module_name: 'user_students',

    route_prefix: 'user-students',

    api_host: location.origin,
    api_prefix: 'admin-students',

    store_prefix: 'userStudent',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
