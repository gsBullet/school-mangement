const store = require('./store');
const update = require('./update');
const destroy = require('./destroy');
module.exports = {
    id: 2,
};

async function run() {
    // await store();
    await update();
    // await destroy();
}
run();
