import setup_type from './setup_type';

const prefix: string = 'Account';
const setup: setup_type = {
    prefix,
    module_name: 'accounts',

    route_prefix: 'accounts',

    api_host: location.origin,
    api_prefix: 'accounts',

    store_prefix: 'accounJournal',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
