/// <reference path="../../types/js-money.d.ts" />

import * as oxr from 'open-exchange-rates'
import * as Money from 'js-money'



export class ExchangeRateProvider {

    constructor() {
        //oxr.set({ app_id: 'YOUR_APP_ID' })
    }

    async convert(amount: Money, currency: string) {
        let rate = await this.getExchangeRate(amount.currency, currency)
        //amount.
        //Money.
    }

    async getExchangeRate(currency1: string, currency2: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            resolve(1)
        })
    }


    private generateCacheKey(currency1: string, currency2: string): string {
        return ""
    }
}