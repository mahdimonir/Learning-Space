//* Getter and Setter
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

  //? Setter => set
  set addBalance(amount: number) {
    this._userBalance = this._userBalance + amount;
  }

  //? Getter => get
  get getBalance() {
    return this._userBalance;
  }
}

const user1 = new BankAccount(24245, "Mr. Hasan", 500);

user1.addBalance = 100;

console.log(user1.getBalance);
