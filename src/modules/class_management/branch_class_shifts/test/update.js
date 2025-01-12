const { expect, test } = require('@jest/globals');
const { app_config } = require('../../../../configs/app.config');
let end_point = 'admin-users/update';
const target = require('./1_1_run.test').default;

// test_method(end_point, 'error 500', 500, {});

test_method(end_point + 's', 'url not found', 404, {});

test_method(end_point, 'id field validation check', 422, {
    name: 'user1',
    email: '1',
});
test_method(end_point, 'name field validation check', 422, {
    email: 'user1',
    id: '1',
});

test_method(end_point, 'email field validation check', 422, {
    name: 'user1',
    id: '1',
});
console.log('target', target);
test_method(end_point, 'admin user successfully updated', 201, {
    id: target.id,
    name: 'user1 update',
    email: 'user1@gmail.com',
    phone_number: '35897593784',
    image: 'avatar.png',
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
