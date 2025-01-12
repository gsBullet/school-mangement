import setup_type from './setup_type';

const prefix: string = 'AccountCategory';
const setup: setup_type = {
    prefix,
    module_name: 'account_categories',

    route_prefix: 'account-categories',

    api_host: location.origin,
    api_prefix: 'account-categories',

    store_prefix: 'accounCategory',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
