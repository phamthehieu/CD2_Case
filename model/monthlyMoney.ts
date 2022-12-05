export class MonthlyMoney {
    private _month : number;
    private _money: number;

    constructor(month: number, money: number) {
        this._month = month;
        this._money = money;
    }

    get month(): number {
        return this._month;
    }

    set month(value: number) {
        this._month = value;
    }

    get money(): number {
        return this._money;
    }

    set money(value: number) {
        this._money = value;
    }
}