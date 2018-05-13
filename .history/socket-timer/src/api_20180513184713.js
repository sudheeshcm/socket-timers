import openSocket from "socket.io-client";
let socket = openSocket("http://localhost:8000");

function subscribeToTimer(interval, cb) {
  socket.on("timer", interval => cb(null, interval));
  socket.emit("subscribeToTimer", interval);
}

function unSubscribe() {
  socket.emit("end");
}

function connectAgain() {
  socket.connect();
  socket = openSocket("http://localhost:8000");
}

export { subscribeToTimer, unSubscribe, connectAgain };
