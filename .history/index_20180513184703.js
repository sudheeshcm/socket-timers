const io = require("socket.io")();

io.on("connection", client => {
  client.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      console.log("client emitting timer");
      client.emit("timer", new Date());
    }, interval);
  });

  client.on("unSubscribe", () => {
    console.log("client unsubscribed to timer");
    io.close();
  });
});

io.on("end", function() {
  io.disconnect(0);
});

const port = 8000;
io.listen(port);
console.log("listening on port ", port);
