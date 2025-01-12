import setup_type from './setup_type';

const prefix: string = 'Branch Transport Driver';
const setup: setup_type = {
    prefix,
    module_name: 'branch_transport_drivers',

    route_prefix: 'branch-transport-drivers',

    api_host: location.origin,
    api_prefix: 'branch-transport-drivers',

    store_prefix: 'branchTransportDriver',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
