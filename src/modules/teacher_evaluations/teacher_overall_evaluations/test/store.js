const { expect, test } = require('@jest/globals');
const { app_config } = require('../../../../configs/app.config');
let end_point = 'admin-users/store';

// test_method(end_point, 'error 500', 500, {});

test_method(end_point + 's', 'url not found', 404, {});

test_method(end_point, 'password field validation check', 422, {
    email: 'user4@gmail.com',
    name: 'user4',
});

test_method(end_point, 'email field validation check', 422, {
    name: 'user4',
    password: '1234',
});

test_method(end_point, 'name field validation check', 422, {
    email: 'user4@gmail.com',
    password: '1234',
});

test_method(end_point, 'admin user successfully created', 201, {
    name: 'user4',
    email: 'user4@gmail.com',
    phone_number: '35897593784',
    image: 'avatar.png',
    password: '1234',
});

async function test_method(end_point, title, tobe, body) {
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
