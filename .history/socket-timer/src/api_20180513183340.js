import openSocket from "socket.io-client";
let socket = openSocket("http://localhost:8000");

function subscribeToTimer(interval, cb) {
  socket.on("timer", interval => cb(null, interval));
  socket.emit("subscribeToTimer", interval);
}

function unSubscribe() {
  socket.emit("unSubscribe");
}

function connectAgain() {
  socket.connect();
}

export { subscribeToTimer, unSubscribe, connectAgain };
