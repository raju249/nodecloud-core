const nodeCloud = require('../../lib/');

const azure = nodeCloud.getProvider("Azure", null);

const vm = azure.compute();

const resourceGroupName = 'nodecloud';
const vmName = 'nodecloud-test';
const publisher = 'Canonical';
const offer = 'UbuntuServer';
const sku = '14.04.3-LTS';
const osType = 'Linux';
const params = {
    location: 'centralus',
    osProfile: {
      computerName: vmName,
      adminUsername: 'ubuntuServer',
      adminPassword: 'Pa$$w0rd92'
    },
    hardwareProfile: {
      vmSize: 'Basic_A0'
    },
     storageProfile: {
      imageReference: {
        publisher: publisher,
        offer: offer,
        sku: sku,
        version: 'latest'
      }
     },
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/'+ process.env.AZURE_SUBSCRIPTION_ID +'/resourceGroups/nodecloud/providers/Microsoft.Network/networkInterfaces/nodecloud-interface'
        }
      ]
    },
  };

vm.createOrUpdate(resourceGroupName, vmName, params)
  .then((res) => {
    return vm.list(resourceGroupName);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
