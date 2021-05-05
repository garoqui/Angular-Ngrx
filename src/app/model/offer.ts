export class Offer{
    id: string;
    name: string;
    characteristics : [];
    productOfferingPrices : [];
 

    constructor(id: string, name: string, characteristics : [], productOfferingPrices : [] ) {
        this.id = id;
        this.name = name;
        this.characteristics = characteristics
        this.productOfferingPrices = productOfferingPrices

      
    }
}