const interval = setInterval(() => {
  console.log(
    `This setInterval is running every 1 seconds ${Math.round(Math.random())}`
  );
}, 1000);

// clear interval
setTimeout(() => {
  clearInterval(interval);
}, 10000);
