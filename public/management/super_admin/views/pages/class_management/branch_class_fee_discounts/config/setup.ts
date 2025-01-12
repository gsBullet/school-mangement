import setup_type from './setup_type';

const prefix: string = 'ClassFeeDiscount';
const setup: setup_type = {
    prefix,
    module_name: 'branch_class_fee_discounts',

    route_prefix: 'branch-class-fee-discounts',

    api_host: location.origin,
    api_prefix: 'branch-class-fee-discounts',

    store_prefix: 'branchClassFeeDiscount',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
