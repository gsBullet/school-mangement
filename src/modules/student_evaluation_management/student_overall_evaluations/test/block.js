const { expect, test } = require('@jest/globals');
const { app_config } = require('../../../../configs/app.config');
let end_point = 'admin-users/block';
const target = require('./1_1_run.test');

// test_method(end_point, 'error 500', 500, {});

test_method(end_point + 's', 'url not found', 404, {});

test_method(end_point, 'id field validation check', 422, {});

test_method(end_point, 'admin user successfully block', 200, {
    id: target.id,
});

function test_method(end_point, title, tobe, body) {
    console.log(title + '/n');
    test(title, async () => {
        let url = `${app_config.server_url}/api/v1/${end_point}`;
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json',
            },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((data) => {
                expect(parseInt(data.status)).toBe(tobe);
            });
    });
}
module.exports = test_method;
