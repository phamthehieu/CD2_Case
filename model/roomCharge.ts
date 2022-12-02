export class RoomCharge {
    private _month: string;
    private _money: number;

    constructor(month: string, money: number) {
        this._month = month;
        this._money = money;
    }

    get month(): string {
        return this._month;
    }

    set month(value: string) {
        this._month = value;
    }

    get money(): number {
        return this._money;
    }

    set money(value: number) {
        this._money = value;
    }
}