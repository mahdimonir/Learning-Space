//* Access => Modify
class BankAccount {
  readonly userId: number;
  userName: string;
  private userBalance: number;
  protected accountType: string;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
    this.accountType = "Standard";
  }

  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentAccount extends BankAccount {
  constructor(userId: number, userName: string, userBalance: number) {
    super(userId, userName, userBalance);
    this.accountType = "Student Account";
  }
}

const user1 = new BankAccount(24245, "Mr. Hasan", 500);
const student1 = new StudentAccount(4512, "Mr. Raihan", 200);

user1.addBalance(100);

console.log("", { user1 }, "\n", { student1 });
