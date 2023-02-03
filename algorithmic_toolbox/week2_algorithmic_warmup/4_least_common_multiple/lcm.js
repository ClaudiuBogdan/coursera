// by Alexander Nikolskiy

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);

        console.log(lcm(a, b));
        process.exit();
    }
}

function gcd(a, b) {
    // write your code here
    const highNum = a > b ? a : b
    const lowNum = a < b ? a : b

    if(a === 0 || b == 0)
        return 0

    const rest = highNum % lowNum

    if(rest === 0)
        return lowNum
    
    return gcd(lowNum, rest)
}

function lcm(a, b) {
    // write your code here
    if(a === 0)
        return b
    
    if(b === 0)
        return a

    return ( a / gcd(a,b) )* b
    
}

module.exports = lcm;
