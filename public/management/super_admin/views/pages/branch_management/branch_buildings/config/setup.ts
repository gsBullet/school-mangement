import setup_type from './setup_type';

const prefix: string = 'Building';
const setup: setup_type = {
    prefix,
    module_name: 'branch_buildings',

    route_prefix: 'branch-buildings',

    api_host: location.origin,
    api_prefix: 'branch-buildings',

    store_prefix: 'branchBuilding',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
