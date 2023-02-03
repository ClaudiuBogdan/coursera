// by Alexander Nikolskiy
const fib = require('./fibonacci_sum_last_digit')
const assert = require('node:assert/strict');

(function test(){
    
    assert.equal(fib(1), 1)
    assert.equal(fib(10), 3)
    assert.equal(fib(10000), 5) //65536
    assert.equal(fib(613455), 6)

    console.log('===== Success =====')
    process.exit(0)
})()
