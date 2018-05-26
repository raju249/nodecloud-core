const nodeCloud = require("../../lib/");

const azure = nodeCloud.getProvider("Azure", null);

const blob = azure.blob();

const containerName = "nodecloud-storage";

const params = {
  publicAccessLevel: "blob"
};

blob
  .create(containerName, params)
  .then(res => {
    console.log(res);
    return blob.list(null, {});
  })
  .then(res => {
    console.log(res);
    return blob.upload(containerName, "test-blob", "./package.json", {});
  })
  .then(res => {
    console.log(res);
    return blob.deleteBlob(containerName, "test-blob", {});
  })
  .then(res => {
    console.log(res);
    return blob.delete(containerName, params);
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
