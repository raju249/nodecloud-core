const nodeCloud = require("../../lib/");

const azure = nodeCloud.getProvider("Azure", null);

const table = azure.table();

const tableName = "nodecloudtable";

const params = {};

const task = {
  PartitionKey: { _: "hometasks" },
  RowKey: { _: "1" },
  description: { _: "take out the trash" },
  dueDate: { _: new Date(2015, 6, 20), $: "Edm.DateTime" }
};

table
  .create(tableName, params)
  .then(res => {
    console.log(res);
    return table.insert(tableName, task, params);
  })
  .then(res => {
    console.log(res);
    return table.retrieveEntity(
      tableName,
      task.PartitionKey._,
      task.RowKey._,
      params
    );
  })
  .then(res => {
    console.log(res);
    return table.deleteEntity(tableName, task, params);
  })
  .then(res => {
    console.log(res);
    return table.delete(tableName, params);
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
