export class product{
    productName:String;
    productId:number;
    cost:number;
    category:String;

    constructor(productName:String,productId:number,cost:number,category:String){
        this.productName=productName;
        this.productId=productId;
        this.cost=cost;
        this.category=category;
    }

}