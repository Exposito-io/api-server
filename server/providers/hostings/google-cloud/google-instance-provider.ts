import { InstanceProvider } from '../../instance-provider'
import { GoogleInstance, CreateGoogleInstanceParams } from 'models'
import * as gcloudCompute from '@google-cloud/compute'
import config from '../../../../config'

const gce = gcloudCompute({
  projectId: 'quantal-152414',
  keyFilename: `${config.secretsPath}/google-compute.json`,
  promise: Promise
})

export class GoogleInstanceProvider extends InstanceProvider {

    async createInstance(params: CreateGoogleInstanceParams): Promise<GoogleInstance> {

        let instance = GoogleInstance.fromParams(params)

        var zone = gce.zone('us-central1-c')

        let data = await zone.createVM(params.name, { 
            machineType: 'f1-micro',
            //os: 'ubuntu'
            disks: [{
                    initializeParams: {
                        sourceImage: "projects/debian-cloud/global/images/debian-8-jessie-v20170619"
                    },
                    boot: true
            }],
            networkInterfaces: [
                {
                    network: "global/networks/default"
                }
            ]
            //resource: { }
        })

        var vm = data[0]
        var operation = data[1]


        return instance

    }


}