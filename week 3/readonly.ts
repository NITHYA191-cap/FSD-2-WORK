class BankBranch {
    public static readonly bankName: string = "HDFC Bank";
    public static totalAccountsCreated: number = 0;

    public readonly accountNumber: string;
    public accountHolder: string;

    constructor(name: string, accNo: string) {
        this.accountHolder = name;
        this.accountNumber = accNo;

        BankBranch.totalAccountsCreated++;
    }

    public static getBankPolicy(): void {
        console.log(
            `Welcome to ${this.bankName}. All FDs are subject to market risks.`
        );
    }

    public showAccount(): void {
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Acc No: ${this.accountNumber}`);
    }
}

console.log(BankBranch.bankName);

BankBranch.getBankPolicy();

const user1 = new BankBranch("Suresh Raina", "HDFC000123");
const user2 = new BankBranch("Deepika P.", "HDFC000456");

console.log(user1.accountNumber);

console.log(
    `Total Accounts in System: ${BankBranch.totalAccountsCreated}`
);