import setup_type from './setup_type';

const prefix: string = 'Task';
const setup: setup_type = {
    prefix,
    module_name: 'tasks',

    route_prefix: 'tasks',

    api_host: location.origin,
    api_prefix: 'tasks',

    store_prefix: 'test',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
