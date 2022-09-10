const amqp = require("amqplib");
const config = require("../LoggerMS/config");

async function consumeMessages() {
  const connection = await amqp.connect(config.rabbitMQ.url);
  const channel = await connection.createChannel();

  const exchangeName = config.rabbitMQ.exchangeName;
  await channel.assertExchange(exchangeName, "direct");

  const q = await channel.assertQueue("WarningAndErrorQueue");

  await channel.bindQueue(q.queue, exchangeName, "Warning");
  await channel.bindQueue(q.queue, exchangeName, "Error");

  channel.consume(q.queue, (msg) => {
    const data = JSON.parse(msg.content);
    console.log(data);
    channel.ack(msg);
  });
}

consumeMessages();
