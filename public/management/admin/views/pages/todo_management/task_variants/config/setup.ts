import setup_type from './setup_type';

const prefix: string = 'Task Variant';
const setup: setup_type = {
    prefix,
    module_name: 'task_variants',

    route_prefix: 'task-variants',

    api_host: location.origin,
    api_prefix: 'task-variants',

    store_prefix: 'taskVariant',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
