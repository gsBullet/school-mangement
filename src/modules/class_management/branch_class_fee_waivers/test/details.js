const { expect, test } = require('@jest/globals');
const { app_config } = require('../../../../configs/app.config');
let end_point = 'admin-users';
const target = require('./1_1_run');

// test_method(end_point, 'error 500', 500, {});

test_method(end_point + 's', 'url not found', 404, {});

test_method(end_point, 'data not found', 404, {
    id: 9999999999,
});

test_method(end_point, 'admin user details successfully fetched', 200, {
    id: target.id,
});

function test_method(end_point, title, tobe, body) {
    console.log(title + '/n');
    test(title, async () => {
        let url = `${app_config.server_url}/api/v1/${end_point}/${body.id}`;
        return await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                expect(parseInt(data.status)).toBe(tobe);
            });
    });
}
module.exports = test_method;
