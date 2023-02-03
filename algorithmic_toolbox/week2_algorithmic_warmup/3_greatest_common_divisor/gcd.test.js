const assert = require('node:assert/strict');
const gcd = require('./gcd');

(function test(){
    assert.equal(gcd(1, 0), 0)
    assert.equal(gcd(2, 3), 1)
    assert.equal(gcd(4,8), 4)
    assert.equal(gcd(12, 16), 4)    
    assert.equal(gcd(16, 12), 4)    
    assert.equal(gcd(12312312, 523112312), 8)   

    console.log('===== Success =====')
    process.exit(0)
})()