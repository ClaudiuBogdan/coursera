// by Alexander Nikolskiy
const fib = require('./fibonacci')
const assert = require('node:assert/strict');

(function test(){
    fib0 = 0
    fib1 = 1
    fib2 = 1
    fib3 = 2
    fib4 = 3
    fib40 = 102334155
    fib50 = 12586269025

    assert.equal(fib(0), fib0)
    assert.equal(fib(1), fib1)
    assert.equal(fib(2), fib2)
    assert.equal(fib(3), fib3)
    assert.equal(fib(4), fib4)
    assert.equal(fib(40), fib40)
    assert.equal(fib(50), fib50)

    console.log('===== Success =====')
    process.exit(0)
})()
