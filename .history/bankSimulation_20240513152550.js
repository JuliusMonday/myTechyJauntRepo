class BankAccount {
    constructor(accountNumber, firstName, lastName) {
        this._accountNumber = accountNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._balance = 0;
        this._transactions = [];
    }

    get accountNumber() {
        return this._accountNumber;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get accountHolder() {
        return `${this._firstName} ${this._lastName}`;
    }

    get balance() {
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
        this._transactions.push(new Transaction("Deposit", amount));
    }

    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
            this._transactions.push(new Transaction("Withdrawal", amount));
        } else {
            console.log("Insufficient funds!");
        }
    }

    getTransactions() {
        return this._transactions;
    }
}

class Transaction {
    constructor(type, amount) {
        this._type = type;
        this._amount = amount;
        this._timestamp = new Date();
    }

    get type() {
        return this._type;
    }

    get amount() {
        return this._amount;
    }

    get timestamp() {
        return this._timestamp;
    }
}


// Creating my bank account
const account = new BankAccount("123456", "John", "Doe");


// Depositing money
account.deposit(1000);

// Withdrawing money
account.withdraw(500);

// Getting my transaction history
const transactions = account.getTransactions();
console.log("Transaction History:");
transactions.forEach(transaction => {
    console.log(`Type: ${transaction.type}, Amount: ${transaction.amount}, Timestamp: ${transaction.timestamp}`);
});