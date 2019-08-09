class NegotiationServices {

    constructor() {
        this._httpService = new HttpService();
    }
    getWeekNegotiation() {

        return this._httpService.get('negociacoes/semana').then(nego => {
            return nego.map(objeto => new Negotiation(new Date(objeto.data), objeto.quantidade, objeto.valor))
        }).catch(error => {
            console.log("ERROR ", error)
            throw new Error('Unable to import, check you internet connection')
        })
    }
    getLastWeekNegotiation() {
        return this._httpService.get('negociacoes/anterior').then(nego => {
            return nego.map(objeto => new Negotiation(new Date(objeto.data), objeto.quantidade, objeto.valor))
        }).catch(error => {
            console.log("ERROR ", error)
            throw new Error('Unable to import, check you internet connection')
        })
    }
    getPastLastWeekNegotiation() {
        return this._httpService.get('negociacoes/retrasada').then(nego => {
            return nego.map(objeto => new Negotiation(new Date(objeto.data), objeto.quantidade, objeto.valor))
        }).catch(error => {
            console.log("ERROR ", error)
            throw new Error('Unable to import, check you internet connection')
        })
    }


    getNegotiations() {
        return Promise.all([this.getWeekNegotiation(),
            this.getLastWeekNegotiation(), this.getPastLastWeekNegotiation()
        ]).then(
            period=>{
                let negots= period.reduce((data,period)=>data.concat(period,[]))

                return negots
            }
        ).catch(error => {throw new Error(error)})
    }
}