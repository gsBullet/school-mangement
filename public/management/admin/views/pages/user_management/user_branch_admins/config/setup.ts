import setup_type from './setup_type';

const prefix: string = 'BranchAdmin';
const setup: setup_type = {
    prefix,
    module_name: 'user_branch_admins',

    route_prefix: 'user-branch-admins',

    api_host: location.origin,
    api_prefix: 'admin-branch-admins',

    store_prefix: 'userBranchAdmin',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
