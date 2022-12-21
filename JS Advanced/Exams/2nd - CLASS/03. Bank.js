class Bank {
    constructor(bankName){
        this._bankName = bankName
        this.allCustomers = []
        this.allNames = []
        this.transactions = []
    }
    newCustomer(customer){
      if(this.allNames.includes(customer.firstName)){
          throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
      }
        this.allCustomers.push({
            firstName : customer.firstName,
            lastName : customer.lastName,
            personalId : customer.personalId,
            totalMoney : 0
        })
        this.allNames.push(customer.firstName)
        return customer
    }
    depositMoney(personalId,amount){
        let idInfo = this.allCustomers.find(s=>s.personalId===personalId)
        if(!idInfo){
            throw new Error(`We have no customer with this ID!`)
        }
        idInfo.totalMoney += amount
        this.transactions.push({
            firstName : idInfo.firstName,
            lastName : idInfo.lastName,
            method : `deposit`,
            amount: amount
        })
        return `${idInfo.totalMoney}$`
    }
    withdrawMoney (personalId, amount){
        let idInfo = this.allCustomers.find(s=>s.personalId===personalId)
        if(!idInfo){
            throw new Error(`We have no customer with this ID!`)
        }
       else if(idInfo.totalMoney<amount){
            throw new Error(`${idInfo.firstName} ${idInfo.lastName} does not have enough money to withdraw that amount!`)
        }
        idInfo.totalMoney -=amount
        this.transactions.push({
            firstName : idInfo.firstName,
            lastName : idInfo.lastName,
            method : `withdrew`,
            amount: amount,
            personalId:idInfo.personalId
        }) 
        return `${idInfo.totalMoney}$`
    }
    customerInfo (personalId){
        let idInfo = this.allCustomers.find(s=>s.personalId===personalId)
        if(!idInfo){
            throw new Error(`We have no customer with this ID!`)
        }
        this.transactions.sort((a,b)=> a.amount - b.amount)
        let tranResult = []
        let number = this.transactions.length-1
        for (let i = 0; i < this.transactions.length; i++) {
           if(this.transactions[i].firstName===idInfo.firstName){
               if(this.transactions[i].method==='deposit'){
                   tranResult.push(`${number}. ${this.transactions[i].firstName} ${this.transactions[i].lastName} made deposit of ${this.transactions[i].amount}$!`)
                   number-=1
               }else if (this.transactions[i].method==='withdrew'){
                tranResult.push(`${number}. ${this.transactions[i].firstName} ${this.transactions[i].lastName} withdrew ${this.transactions[i].amount}$!`)
                number-=1
               }
           }
            
        }
        let result = []
        result.push(`Bank name: ${this._bankName}`)
        result.push(`Customer name: ${idInfo.firstName} ${idInfo.lastName}`)
        result.push(`Customer ID: ${idInfo.personalId}`)
        result.push(`Total Money: ${idInfo.totalMoney}$`)
        result.push(`Transactions:`)
        tranResult.forEach(s=> result.push(s))


        return result.join('\n')
    }
}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));

// let bookInfo = this.books.find(s=>s.bookName===bookName)