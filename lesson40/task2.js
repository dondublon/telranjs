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
    this.withdraw2 = function (amount) {
        // null = success, string = error
        if (this.balance >= amount) {
            this.balance -= amount;
            return null;
        } else {
            return "Not enough money";
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

/*
с) (чуть сложнее****************)
В качестве результата функции transaer, в случае успешной
операции, должен cформироваться объект:
    - account1 (счет списания),
- account2 (счет зачисления),
- amount (сумма)
- transactionInfo() (функция, которая выводит информацию о транзакции)

Если транзакция прошла неуспешно, объект должен содержать
еще и поле error c информацией об ошибке. Естественно,
    transactionInfo() должна в этом случае выводить информацию
о неуспешной транзакции. В случае, если транзакция успешна,
    поля error не должно быть.

*/
function Transaction(acc1, acc2, amount, error=null) {
    this.account1 = acc1;
    this.account2 = acc2;
    this.amount = amount;
    this.error = error;
    this.transactionInfo = function () {
        if (this.error == null) {
            return `Transfer from ${this.account1};  Tp ${this.account2}; Amount ${this.amount}`;
        }
        else {
            return `Error transfer from ${this.account1};  Tp ${this.account2}; Amount ${this.amount}; Error ${this.error}`;
        }

    }
}

function transfer2(acc1, acc2, amount) {
    result = acc1.withdraw2(amount);
    if (result == null) {
        acc2.deposit(amount);
        transaction = new Transaction(acc1, acc2, amount);
    }
    else
        transaction = new Transaction(acc1, acc2, amount, result);
    console.log(transaction);

}

transfer2(account2, account1, 50);
transfer2(account2, account1, 500);