// by Alexander Nikolskiy
const fib = require('./fibonacci_huge')
const assert = require('node:assert/strict');

(function test(){
    
    assert.equal(fib(1000,100), 75)

    console.log('===== Success =====')
    process.exit(0)
})()
