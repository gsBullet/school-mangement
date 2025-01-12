import setup_type from './setup_type';

const prefix: string = 'Meeting Agenda';
const setup: setup_type = {
    prefix,
    module_name: 'meeting_agendas',

    route_prefix: 'meeting-agendas',

    api_host: location.origin,
    api_prefix: 'meeting-agendas',

    store_prefix: 'meetingAgenda',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
