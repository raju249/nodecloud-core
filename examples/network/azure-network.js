const nodeCloud = require("../../lib/");

const azure = nodeCloud.getProvider("Azure", null);

const network = azure.network();

const resourceGroupName = "nodecloud";
const networkName = "nodecloud-test";

const params = {
  location: "centralus",
  addressSpace: {
    addressPrefixes: ["10.0.0.0/16"]
  }
};

network
  .create(resourceGroupName, networkName, params)
  .then(res => {
    console.log(res);
    return network.list(resourceGroupName);
  })
  .then(res => {
    console.log(res);
    return network.get(resourceGroupName, networkName, params);
  })
  .then(res => {
    console.log(res);
    return network.delete(resourceGroupName, networkName, params);
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
