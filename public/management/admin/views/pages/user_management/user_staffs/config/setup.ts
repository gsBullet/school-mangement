import setup_type from './setup_type';

const prefix: string = 'Staff';
const setup: setup_type = {
    prefix,
    module_name: 'user_staffs',

    route_prefix: 'user-staffs',

    api_host: location.origin,
    api_prefix: 'user-staffs',

    store_prefix: 'userStaff',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
