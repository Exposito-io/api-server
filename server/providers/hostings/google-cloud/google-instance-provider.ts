import { InstanceProvider } from '../../instance-provider'
import { Instance,GoogleInstance, CreateGoogleInstanceParams } from 'models'
import * as gcloudCompute from '@google-cloud/compute'
import config from '../../../../config'

const gce = gcloudCompute({
  projectId: 'quantal-152414',
  keyFilename: `${config.secretsPath}/google-compute.json`,
  promise: Promise
})

export class GoogleInstanceProvider extends InstanceProvider {

    async createInstance(params: CreateGoogleInstanceParams): Promise<GoogleInstance> {

        let instance = Instance.fromParams(params)
 
        var zone = gce.zone(instance.zone)

        let data = await zone.createVM(params.name, { 
            machineType: instance.machineType,
            //os: 'ubuntu'
            disks: [{
                    initializeParams: {
                        sourceImage: "projects/debian-cloud/global/images/debian-8-jessie-v20170619"
                    },
                    boot: true,
                    autoDelete: true
            }],
            networkInterfaces: [
                {
                    network: "global/networks/default",
                    accessConfigs: [
                        {
                        "name": "External NAT",
                        "type": "ONE_TO_ONE_NAT"
                        }
                    ]                    
                }
            ]
        })

        var vm = data[0]
        var operation = data[1]


        return instance

    }


}