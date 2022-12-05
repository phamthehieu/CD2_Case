import {MonthlyMoney} from "../model/monthlyMoney";

export class MonthlyMoneyManage {
    listMonthlyMoney: MonthlyMoney[] = []

    add(t: MonthlyMoney) {
        this.listMonthlyMoney.push(t);
    }

    checkMoneyMonth(month: number) {
        for (let i = 0; i < this.listMonthlyMoney.length; i++) {
            if (this.listMonthlyMoney[i].month === month) {
                return this.listMonthlyMoney[i].money
            }
        }
    }

    totalMoney() {
        let str = ''
        for (let i = 0; i < this.listMonthlyMoney.length; i++) {
            str += this.listMonthlyMoney[i].money
        }
        return str;
    }
}