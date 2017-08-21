import config from '../../config'
import * as Queue from 'bull'


let availableJobQueues = {
    'repo-stats': new Queue('repo-stats', config.queueServer)
}

let availableQueueNames = Object.getOwnPropertyNames(availableJobQueues)


/**
 * TODO: Send only jobs owned by the client
 */
export class JobNotifier {

    private io
    private clients: Map<string, Array<any>> = new Map()


    constructor(io) {
        this.io = io.of('/jobs')
        this.setupWebSocket()
    }


    subscribe(queue: string, fn: Function) {

    }


    private removeClient(client) {
        for (let queue of this.clients.keys()) {

            let queueClients = this.clients.get(queue)

            for (let c of queueClients) {
                if (client.id === c.client.id) {
                    console.log('client removed successfully')
                    availableJobQueues[queue].off('global:completed', c.listener)
                    queueClients.splice(queueClients.indexOf(c), 1)
                }
            }
        }
    }



    private setupWebSocket() {        

        for (let queue in availableJobQueues) {
            this.clients.set(queue, [])
        }        

        this.io.on('connection', client => {

            client.on('subscribe', data => {                

                if (availableQueueNames.includes(data.queue)) {
                    
                    let queueClients = this.clients.get(data.queue)

                    if (!queueClients.some( c => c.client.id === client.id )) {
                        console.log(`Subscribing to ${data.queue}`)
                        let listener = this.generateQueueCompleteListener(client, data.queue)
                        queueClients.push({ client, listener })

                        availableJobQueues[data.queue].on('global:completed', listener)
                    }

                    
                }
                else {
                    console.log(`Unable to subscribe to queue ${data.queue}, no such job queue available.`)
                }
                

                console.log('data')
                console.log(data)
            })


            client.on('unsubscribe', data => {
                // TODO
                //this.removeClient(client)
            })


            client.on('disconnect', () => {
                // TODO
                this.removeClient(client)
                console.log('disconnected')
            })
        })  

    }


    private generateQueueCompleteListener(client, queue: string) {
        return (job, result) => {
            console.log('job complete: ', queue, job.data)
            client.emit(`job-complete:${queue}`, job.data) 
        }
    }

}