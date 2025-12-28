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
        if (self.balance >= amount) {
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