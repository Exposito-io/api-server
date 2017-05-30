import * as oxr from 'open-exchange-rates'


export class ExchangeRateProvider {

    constructor() {
        //oxr.set({ app_id: 'YOUR_APP_ID' })
    }

    async getExchangeRate(currency1: string, currency2: string) {
        

    }


    private generateCacheKey(currency1: string, currency2: string) {

    }
}