import setup_type from './setup_type';

const prefix: string = 'ClassFee';
const setup: setup_type = {
    prefix,
    module_name: 'branch_class_fees',

    route_prefix: 'branch-class-fees',

    api_host: location.origin,
    api_prefix: 'branch-class-fees',

    store_prefix: 'branchClassFee',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
