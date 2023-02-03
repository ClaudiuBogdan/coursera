const assert = require('node:assert/strict');
const lcm = require('./lcm');

(function test(){
    assert.equal(lcm(0, 1), 1)
    assert.equal(lcm(1, 2), 2)
    assert.equal(lcm(10, 15), 30)

    console.log('===== Success =====')
    process.exit(0)
})()