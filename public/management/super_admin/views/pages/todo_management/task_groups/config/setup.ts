import setup_type from './setup_type';

const prefix: string = 'Task Group';
const setup: setup_type = {
    prefix,
    module_name: 'task_groups',

    route_prefix: 'task-groups',

    api_host: location.origin,
    api_prefix: 'task-groups',

    store_prefix: 'taskGroup',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
