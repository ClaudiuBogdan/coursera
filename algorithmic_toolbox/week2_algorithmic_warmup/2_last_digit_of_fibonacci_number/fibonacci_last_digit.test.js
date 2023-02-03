// by Alexander Nikolskiy
const fib = require('./fibonacci_last_digit')
const assert = require('node:assert/strict');

(function test(){
    fib0 = 0
    fib1 = 1
    fib2 = 1
    fib3 = 2
    fib4 = 3
    fib40 = 5
    fib50 = 5
    fib51 = 4
    fib52 = 9

    assert.equal(fib(0), fib0)
    assert.equal(fib(1), fib1)
    assert.equal(fib(2), fib2)
    assert.equal(fib(3), fib3)
    assert.equal(fib(4), fib4)
    assert.equal(fib(40), fib40)
    assert.equal(fib(50), fib50)
    assert.equal(fib(51), fib51)
    assert.equal(fib(52), fib52)
    
    assert.equal(fib(239), 1)

    console.log('===== Success =====')
    process.exit(0)
})()
