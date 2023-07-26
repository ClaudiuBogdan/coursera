// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

let d, m, n, stops;

rl.on("line", (line) => {
  if (!d) {
    d = parseInt(line);
  } else if (!m) {
    m = parseInt(line);
  } else if (!n) {
    n = parseInt(line);
  } else {
    stops = line.split(" ").map(Number);
    // Do something with the input
    const solution = getTotalCarStops(d, m, stops)
    console.log(solution)
    process.exit();
  }
});

const getTotalCarStops = (totalDistance, tankCapacity, stops)=>{
    let totalStops = 0;
    let maxRange = tankCapacity;
    for(let i = 0; i < stops.length; i++){
        const stop = stops[i];
        if (maxRange < stop && i === 0) {
            return -1;
        }
        if (maxRange < stop) {
            const prevStop = stops[i - 1];
            maxRange = prevStop + tankCapacity;
            totalStops++;
        }
        if (maxRange < stop && maxRange < totalDistance) {
            return -1;
        }
        if (i === stops.length - 1 && maxRange < totalDistance) {
            maxRange = stop + tankCapacity;
            totalStops++;
        }
        if (maxRange >= totalDistance) {
            return totalStops;
        }
    }
    return -1;
};
