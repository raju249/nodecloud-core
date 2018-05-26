const nodeCloud = require("../../lib/");

const azure = nodeCloud.getProvider("Azure", null);

const queue = azure.queue();

const queueName = "nodecloud-queue";

const params = {};

queue
  .create(queueName, params)
  .then(res => {
    console.log(res);
    return queue.insert(queueName, "I am cool", params);
  })
  .then(res => {
    console.log(res);
    return queue.peek(queueName, params);
  })
  .then(res => {
    console.log(res);
    return queue.delete(queueName, params);
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
