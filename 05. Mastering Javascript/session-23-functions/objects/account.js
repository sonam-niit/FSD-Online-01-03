function BankAccount(accNo, holder, balance) {
    this.accNo = accNo;
    this.holder = holder;
    this.balance = balance;

    this.diposit = function (amount) {
        this.balance += amount;
        console.log(`${amount}  is diposited to ${this.accNo}`);
        console.log(`Available Balance: ${this.balance}`);
    }
    this.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`${this.accNo} is debited by ${amount} `);
            console.log(`Available Balance: ${this.balance}`);
        }else{
            console.log("No sufficient balance");
        }
    }
    this.checkBalance= function(){
        console.log(`Available Balance is ${this.balance}`);
    }
}

let a1= new BankAccount("SBI000001","Sonam Soni",10000);
a1.checkBalance();
a1.diposit(2000);
a1.withdraw(12000);
a1.withdraw(1000);
