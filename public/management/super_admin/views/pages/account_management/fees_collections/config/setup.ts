import setup_type from './setup_type';

const prefix: string = 'FeesCollection';
const setup: setup_type = {
    prefix,
    module_name: 'fees_collections',

    route_prefix: 'fees-collections',

    api_host: location.origin,
    api_prefix: 'fees-collections',

    store_prefix: 'accountFeesCollection',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
