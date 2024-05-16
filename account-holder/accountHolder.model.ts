export class accountHolder{
    accountNumber:number;
    acHolderName:String;
    accountType:String;
    amount:number;
    date:String

    constructor(accountNumber:number,acHolderNaame:String,accountType:String,amount:number,date:String)
    {
        this.accountNumber=accountNumber;
        this.acHolderName=acHolderNaame;
        this.accountType=accountType;
        this.amount=amount;
        this.date=date
    }

}