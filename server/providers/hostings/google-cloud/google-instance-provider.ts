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


    async getById(id: string): Promise<Instance> {
        // TODO validate id
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('instances') as Collection

        let instance = await col.findOne({ _id: new ObjectID(id) })

        instance = Instance.fromJSON(instance)    

        let zone = gce.zone(instance.zone)
        let ginstance = zone.vm(instance.instanceName)

        let data = await ginstance.get()
        let vm = data[0]

        instance.creationTimestamp = vm.metadata.creationTimestamp
        instance.status = vm.metadata.status
        instance.disks = vm.metadata.disks
        instance.networkInterfaces = vm.metadata.networkInterfaces

        return instance
    }


    async createInstance(params: CreateGoogleInstanceParams): Promise<GoogleInstance> {

        let instance = Instance.fromParams(params)
 
        let zone = gce.zone(instance.zone)

        let data = await zone.createVM(instance.instanceName, { 
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