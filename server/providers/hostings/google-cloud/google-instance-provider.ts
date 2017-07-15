import { InstanceProvider } from '../../instance-provider'
import { Instance,GoogleInstance, CreateGoogleInstanceParams } from 'models'
import * as gcloudCompute from '@google-cloud/compute'
import config from '../../../../config'
import * as dbFactory from 'mongo-factory'
import { ObjectID, Collection } from 'mongodb'

const gce = gcloudCompute({
  projectId: 'quantal-152414',
  keyFilename: `${config.secretsPath}/google-compute.json`,
  promise: Promise
})

export class GoogleInstanceProvider extends InstanceProvider {

    async createInstance(params: CreateGoogleInstanceParams): Promise<GoogleInstance> {

        let instance = Instance.fromParams(params)
 
        let zone = gce.zone(instance.zone)

        // TODO: Add organizationId to vm name on google compute
        let data = await zone.createVM(params.name, { 
            machineType: instance.machineType,
            disks: params.disks,
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


        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('instances') as Collection

        await col.insertOne(instance)

        return instance

    }


}