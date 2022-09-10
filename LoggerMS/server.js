const express = require("express");
const bodyParser = require("body-parser");
const Producer = require("./producer");
const app = express();
const producer = new Producer();

app.use(bodyParser.json("application/json"));

app.post("/sendlog", async (req, res) => {
  await producer.publishMessage(req.body.logType, req.body.message);
  res.send();
});

app.listen(5000, () => {
  console.log(`Producer is running on port 5000`);
});
