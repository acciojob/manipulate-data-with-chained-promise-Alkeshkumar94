//your JS code here. If required.
function processData(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  })
  .then(array => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evens = array.filter(num => num % 2 === 0);
        document.getElementById("output").textContent = evens.join(", ");
        resolve(evens);
      }, 1000);
    });
  })
  .then(evens => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multiplied = evens.map(num => num * 2);
        document.getElementById("output").textContent = multiplied.join(", ");
        resolve(multiplied);
      }, 2000);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

// Usage example
processData([1, 2, 3, 4]);
