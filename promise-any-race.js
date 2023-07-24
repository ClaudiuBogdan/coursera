// Example function that returns a promise which resolves after a given delay
function delay(ms, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error("Promise rejected: " + ms + "ms"));
      } else {
        resolve("Promise resolved: " + ms + "ms");
      }
    }, ms);
  });
}

// Array of promises
const promises = [
  delay(2000), // Resolves after 2 seconds
  delay(1000, true), // Rejects after 3 seconds
  delay(1500), // Resolves after 1.5 seconds
];

// Using Promise.any()
Promise.any(promises)
  .then((result) => {
    console.log("Promise.any() fulfilled:", result);
  })
  .catch((error) => {
    console.log("Promise.any() rejected:", error);
  });

// Using Promise.race()
Promise.race(promises)
  .then((result) => {
    console.log("Promise.race() fulfilled:", result);
  })
  .catch((error) => {
    console.log("Promise.race() rejected:", error);
  });
