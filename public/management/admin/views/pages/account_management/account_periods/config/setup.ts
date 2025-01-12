import setup_type from './setup_type';

const prefix: string = 'AccountPeriod';
const setup: setup_type = {
    prefix,
    module_name: 'account_periods',

    route_prefix: 'account-periods',

    api_host: location.origin,
    api_prefix: 'account-periods',

    store_prefix: 'accounPeriod',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
