const logEvents = require("./logEvents");
const events = require("events");

const myEvent = new events.EventEmitter();
myEvent.on("log", (msg) => {
  logEvents(msg);
});

setTimeout(() => {
  myEvent.emit("log", "Log Event Emitted");
}, 2000);
