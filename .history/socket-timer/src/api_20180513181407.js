import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

function subscribeToTimer(interval, cb) {
  socket.on("timer", interval => cb(null, interval));
  socket.emit("subscribeToTimer", interval);
}

function unSubscribe() {
  socket.emit("unSubscribe");
}

export { subscribeToTimer, unSubscribe };
