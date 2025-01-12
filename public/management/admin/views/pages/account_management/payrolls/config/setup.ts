import setup_type from './setup_type';

const prefix: string = 'Payroll';
const setup: setup_type = {
    prefix,
    module_name: 'payrolls',

    route_prefix: 'payrolls',

    api_host: location.origin,
    api_prefix: 'payrolls',

    store_prefix: 'accountPayroll',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
