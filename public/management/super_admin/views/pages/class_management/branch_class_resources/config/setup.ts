import setup_type from './setup_type';

const prefix: string = 'Branch Class Resource';
const setup: setup_type = {
    prefix,
    module_name: 'branch_class_resources',

    route_prefix: 'branch-class-resources',

    api_host: location.origin,
    api_prefix: 'branch-class-resources',

    store_prefix: 'branchClassResouce',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
