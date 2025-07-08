function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      // reject("Not find any error");
    }, 2000);
  });
}

// Async-await by IIFE
(async function () {
  console.log("getting data 1 ....");
  await getData(1);
  console.log("getting data 2 ....");
  await getData(2);
  console.log("getting data 3 ....");
  await getData(3);
})();
