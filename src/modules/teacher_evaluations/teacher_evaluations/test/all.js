const { expect, test } = require('@jest/globals');
const { app_config } = require('../../../../configs/app.config');
let end_point = 'admin-users';

// test_method(end_point, 'error 500', 500, {});

test_method(end_point + 's', 'url not found', 404, {});

test_method(end_point, 'paginate field validation check', 422, {
    orderByCol: 'true',
    orderByAsc: 'true',
    show_active_data: 'true',
});

test_method(end_point, 'show_active_data field validation check', 422, {
    orderByCol: 'true',
    orderByAsc: 'true',
    paginate: '10',
});

test_method(end_point, 'orderByAsc field validation check', 422, {
    orderByCol: 'true',
    show_active_data: 'true',
    paginate: '10',
});

test_method(end_point, 'orderByCol field validation check', 422, {
    orderByAsc: 'true',
    show_active_data: 'true',
    paginate: '10',
});

test_method(end_point, 'admin user successfully fetched', 200, {
    orderByCol: 'id',
    orderByAsc: 'true',
    show_active_data: 'true',
    paginate: '10',
});

function test_method(end_point, title, tobe, body) {
    console.log(title + '/n');
    test(title, async () => {
        let url = `${app_config.server_url}/api/v1/${end_point}`;
        return await fetch(url + '?' + new URLSearchParams(body))
            .then((res) => res.json())
            .then((data) => {
                expect(parseInt(data.status)).toBe(tobe);
            });
    });
}
module.exports = test_method;
