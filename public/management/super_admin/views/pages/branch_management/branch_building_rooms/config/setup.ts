import setup_type from './setup_type';

const prefix: string = 'Building  Room';
const setup: setup_type = {
    prefix,
    module_name: 'branch_building_rooms',

    route_prefix: 'branch-building-rooms',

    api_host: location.origin,
    api_prefix: 'branch-building-rooms',

    store_prefix: 'branchBuildingRoom',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
