import config from '../../config'
import * as Queue from 'bull'


let availableJobQueues = {
    'repo-stats': new Queue('repo-stats', config.queueServer)
}

let availableQueueNames = Object.getOwnPropertyNames(availableJobQueues)



export class JobNotifier {

    private io
    private clients: Map<string, Array<any>> = new Map()


    constructor(io) {
        this.io = io.of('/jobs')
        this.setupWebSocket()
    }


    subscribe(queue: string, fn: Function) {

    }


    private onJobComplete(queue: string, data) {
        for (let client of this.clients.get(queue)) 
            client.emit(`job-complete:${queue}`, data)        
    }

    private removeClient(client) {
        for (let queue of this.clients.keys()) {

            let queueClients = this.clients.get(queue)

            for (let client of queueClients) {
                if (client === client)
                    queueClients.splice(queueClients.indexOf(client), 1)
            }
        }
    }


    private setupWebSocket() {
        
        for (let queue in availableJobQueues) {
            this.clients.set(queue, [])

            availableJobQueues[queue].on('global:completed', (job, result) => {
                console.log('job complete: ', queue, job.data)
                this.onJobComplete(queue, job.data)
                // client.emit('job-complete', { data: job.data, result })
            })
        }
        

        this.io.on('connection', function(client) {
            client.on('subscribe', data => {                

                if (availableQueueNames.includes(data.queue)) {
                    console.log(`Subscribing to ${data.queue}`)
                    let queueClients = this.clients.get(data.queue)
                    if (!queueClients.includes(client))
                        queueClients.push(client)

                }
                else {
                    console.log(`Unable to subscribe to queue ${data.queue}, no such job queue available.`)
                }
                

                console.log('data')
                console.log(data)
            })

            client.on('disconnect', () => {

                //repoStatsQueue.
                console.log('disconnected')
            })
        })  

    }



}