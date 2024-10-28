let lastNumber = 10000;

interface Account {
    type: 'credit' | 'debit';
    number: number;
    balance: number;
    topUp(arg: number): void;
    withdraw(arg: number): number | string;
    getBalance?: ()=> number;
    owing?: ()=> number;

}


class DebitAccount implements Account {
    type: 'credit' | 'debit' = 'debit';
    readonly number: number;
    balance: number = 0

    constructor() {
        lastNumber++
        this.number = lastNumber
    }

    topUp(sum: number) {
        this.balance += sum
    }

    withdraw(sum: number) {
        if (this.balance > sum) {
            this.balance -= sum
            return sum
        } else {
            return "недостаточно средств"
        }
    }
    getBalance(){
        return this.balance
    }
}

class CreditAccount implements Account {
    type: 'credit' | 'debit' = 'debit';
    readonly number: number;
    balance: number;
    readonly limit: number;

    constructor(limit:number) {
        lastNumber++
        this.number = lastNumber
        this.balance = limit
        this.limit = limit
    }

    topUp(sum: number) {
        this.balance += sum
    }

    withdraw(sum: number) {
        if ( this.balance > sum) {
            this.balance -= sum
            return sum
        } else {
            return "недостаточно средств"
        }
    }
    owing() {
        return this.limit - this.balance
    }
}

console.log('        создать новый дебетовый счет');
const debitAccount = new DebitAccount();
console.log(`счет номер: ${debitAccount.number} сумма на счету: ${debitAccount.balance}`);
console.log(`снять со счета 100р. снято  : ${debitAccount.withdraw(100)}р. `);
debitAccount.topUp(500);
console.log(`пополнить счет 500р. остаток  : ${debitAccount.getBalance()}р. `);
console.log(`снять со счета 100р. снято  : ${debitAccount.withdraw(100)} `);
console.log(` остаток  : ${debitAccount.getBalance()}р. `);
console.log(`---------------------------------------------------------`);
console.log('         создать новый дебетовый счет c лимитом 1000р');
const creditAccount = new CreditAccount(1000);
console.log(`счет номер: ${creditAccount.number} остаток на счету: ${creditAccount.balance}р.
`);
console.log(`снять со счета 100р. снято  : ${creditAccount.withdraw(100)} `);
console.log(`долг  : ${creditAccount.owing()}р. `);
console.log(`остаток на счету: ${creditAccount.balance}р
`);

creditAccount.topUp(500);
console.log(`пополнить счет на 500р. долг  : ${creditAccount.owing()}р. `);
console.log(`остаток на счету: ${creditAccount.balance}р
`);
console.log(`снять со счета 200р. снято  : ${creditAccount.withdraw(200)} `);
console.log(`остаток на счету: ${creditAccount.balance}р`);
console.log(`долг  : ${creditAccount.owing()}р. `);
console.log(`---------------------------------------------------------`);
