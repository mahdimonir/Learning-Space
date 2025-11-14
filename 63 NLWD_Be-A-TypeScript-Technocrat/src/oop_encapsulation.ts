//* Encapsulation => Access Modify
class BankAccount {
  readonly userId: number;
  userName: string;
  private _userBalance: number;
  protected _accountType: string;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
    this._accountType = "Standard";
  }

  addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
}

class StudentAccount extends BankAccount {
  constructor(userId: number, userName: string, userBalance: number) {
    super(userId, userName, userBalance);
    this._accountType = "Student Account";
  }
}

const user1 = new BankAccount(24245, "Mr. Hasan", 500);
const student1 = new StudentAccount(4512, "Mr. Raihan", 200);

user1.addBalance(100);

console.log("", user1, "\n", student1);
