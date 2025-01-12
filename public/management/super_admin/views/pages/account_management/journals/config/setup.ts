import setup_type from './setup_type';

const prefix: string = 'Journal';
const setup: setup_type = {
    prefix,
    module_name: 'journals',

    route_prefix: 'journals',

    api_host: location.origin,
    api_prefix: 'journals',

    store_prefix: 'accounJournal',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
