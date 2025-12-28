//a)
//Создай функцию-конструктор объектов Account(iban,owner, balance),
//    которая возвращает объект с:
//    - номер счета (iban)
//- именем владельца (owner)
//- балансом (balance)
//методами:
//    - **deposit**(amount) — пополнение счёта
//- **withdraw**(amount) — снятие денег (если хватает баланса)
//- **getBalance**() — вывод текущего баланса
function Account(iban, owner, balance) {
    this.iban = iban;
    this.owner = owner;
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    }
    this.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        } else {
            return false;
        }
    }
    this.getBalance = function () {
        return this.balance;
    }
}

let account1 = new Account('7832', "John Smith", 100);
let account2 = new Account('4886', "Mary Smith", 200);
let account3 = new Account('9965', "Petre Jackson", 300);

let accounts = [account1, account2, account3];
printAccounts(accounts);
function printAccounts(arr) {
    for (let acc of accounts) {
        console.log(acc);
    }
    console.log("------------------");
}

function transfer(acc1, acc2, amount) {
    if (acc1.withdraw(amount)) {
        acc2.deposit(amount);
        console.log("Transfer successful");
    }
    else
        console.log("Transfer failed");

}
// success:
transfer(account1, account2, 50);
printAccounts(accounts);

transfer(account1, account2, 60);
printAccounts(accounts);