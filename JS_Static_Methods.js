// JS Static Methods
// Easy
// Time Limit: 2, Memory Limit: 128000
// Complete the given JS Class and also its static methods. Static member can be accessed before any objects of its class are created, and without reference to any object
// The static methods works as follows
// returnTotalAccounts : return the total number of accounts created using this class
//  returnTotalBalance : returns the total balance of all accounts created using this class


// Note: Input and Output are handled by the judge
// Input
// The class Account constructor takes 2 arguments
// accountName(string), balance(number)
// Both the static methods returnTotalAccounts and returnTotalBalance doesn't take any arguments
// Output
// The method   returnTotalAccounts returns totalAccounts(Number)
// The method returnTotalBalance returns totalBalance(Number)
// Example
// let user1 = new Account("newton1102", 1000)
// let user2 = new Account("newton2231", 2000)
// let user3 = new Account("newton1212", 500)

// let totalAccounts = account.returnTotalAccounts()
// let totalBal = account.returnTotalBalance()  

// console.log(totalAccounts)
// cosole.log(totalBal)
// //3
// //3500

// .............................................................................................

class Account {
    constructor(accountName, balance) {
        this.accountName = accountName;
        this.balance = balance;
        Account.totalAccounts = (Account.totalAccounts || 0) + 1;
        Account.totalBalance = (Account.totalBalance || 0) + balance;
    }

    static returnTotalAccounts() {
        return Account.totalAccounts || 0;
    }

    static returnTotalBalance() {
        return Account.totalBalance || 0;
    }
}

// // Example usage:
// let user1 = new Account("newton1102", 1000);
// let user2 = new Account("newton2231", 2000);
// let user3 = new Account("newton1212", 500);

// let totalAccounts = Account.returnTotalAccounts();
// let totalBal = Account.returnTotalBalance();

// console.log(totalAccounts); // Output: 3
// console.log(totalBal);      // Output: 3500
