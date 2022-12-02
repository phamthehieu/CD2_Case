import {Account} from "../model/account";

export class AccountManage {
    listAccount: Account[] = []

    constructor() {
    }

    add(account: Account) {
        this.listAccount.push(account)
    }

    registration(account: Account) {
        let flag;
        if (this.listAccount.length === 0) {
            this.add(account);
            console.log('Sucess!')
        } else {
            for (let i = 0; i < this.listAccount.length; i++) {
                flag = true;
                if (this.listAccount[i].userName === account.userName || account.userName.length < 8 || account.userName.length > 16) {
                    console.log(`Tên đăng nhập sai hoặc đã tồn tại`)
                    flag = false;
                }
                if (account.password.length < 8 || account.password.length > 16) {
                    console.log(`Mật khẩu phải từ 8 đến 16 kí tự`)
                    flag = false;
                }
                if (this.validateEmail(account.email) === false || this.listAccount[i].email === account.email) {
                    console.log(`Email bạn nhập sai`)
                    flag = false;

                }
                if (account.age < 18) {
                    console.log(`Bạn phải lớn hơn 18 tuổi`)
                    flag = false;
                }
                if (account.numberPhone.length !== 10) {
                    console.log(`phoneNumber bạn nhập sai`)
                    flag = false;
                }
                if (flag === false) break;
            }
            if (flag === true) {
                this.add(account);
                console.log('Sucess!')
            }
        }
    }

    validateEmail(email
                      :
                      string
    ) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    displayAll() {
        let str = ''
        for (let i = 0; i < this.listAccount.length; i++) {
            str += `id: ${this.listAccount[i].id} | userName: ${this.listAccount[i].userName} | password ${this.listAccount[i].password} | numberPhone: ${this.listAccount[i].numberPhone} | address: ${this.listAccount[i].address} | email: ${this.listAccount[i].email} | fullName: ${this.listAccount[i].fullName} | status: ${this.listAccount[i].status}\n`
        }
        return str;
    }

    logIn(name
              :
              string, password
              :
              string
    ):
        number | undefined {
        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].userName === name && this.listAccount[i].password === password && this.listAccount[i].status === true) {
                return 1;
            }
        }
    }

}