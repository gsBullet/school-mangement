import setup_type from './setup_type';

const prefix: string = 'Meeting';
const setup: setup_type = {
    prefix,
    module_name: 'meetings',

    route_prefix: 'meeting',

    api_host: location.origin,
    api_prefix: 'meetings',

    store_prefix: 'meeting',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
