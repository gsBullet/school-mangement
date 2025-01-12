import setup_type from './setup_type';

const prefix: string = 'Parent';
const setup: setup_type = {
    prefix,
    module_name: 'user_parents',

    route_prefix: 'user-parents',

    api_host: location.origin,
    api_prefix: 'admin-parents',

    store_prefix: 'userParent',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
