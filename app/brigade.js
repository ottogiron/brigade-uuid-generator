const { events, Job } = require("brigadier");

events.on("exec   ", function(e, project) {
  console.log("\n\t==> RUNNING EVENT\n");

  j1 = new Job("hello", "alpine:3.5", ["echo 'hello'"])

  j1.run();
})