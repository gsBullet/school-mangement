import setup_type from './setup_type';

const prefix: string = 'Class';
const setup: setup_type = {
    prefix,
    module_name: 'branch_classes',

    route_prefix: 'branch-classes',

    api_host: location.origin,
    api_prefix: 'branch-classes',

    store_prefix: 'branchClass',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
