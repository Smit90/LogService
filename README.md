# Messaging Queue with RabbitMQ

- We are going to use RabbitMQ in order to communicate between different microservices in NodeJs.
- This example uses the Direct exchange type in a logging system.

---

## Microservices

- LoggerMS (Producer)
- InfoMS (Consumer)
- WarningAndErrorMS (Consumer)

## Installation

```
git clone https://github.com/Smit90/LogService.git

cd LoggerMS && npm i && npm start
cd InfoMS && npm i && npm start
cd WarningAndErrorMS && npm i && npm start
```

> Note: Make sure RabbitMQ installed on your local machine.

<h1 align="center">(｡◕‿◕｡)</h1>
