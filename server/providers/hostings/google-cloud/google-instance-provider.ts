import { InstanceProvider } from '../../instance-provider'
import { GoogleInstance, CreateGoogleInstanceParams } from 'models'
import * as gcloudCompute from '@google-cloud/compute'

const gce = gcloudCompute({
  projectId: 'quantal-152414',
  keyFilename: '/home/mathew/workspace/Exposito/secrets/google-compute.json',
  promise: Promise
})

export class GoogleInstanceProvider extends InstanceProvider {

    async createInstance(params: CreateGoogleInstanceParams): Promise<GoogleInstance> {

        let instance = GoogleInstance.fromParams(params)

        var zone = gce.zone('us-central1-c')

        let data = await zone.createVM(params.name, { 
            machineType: 'f1-micro',
            os: 'ubuntu'
            //resource: { }
        })

        var vm = data[0]
        var operation = data[1]


        return instance

    }


}