export class Order {
    id: number = 0;
    private static _auto = 0
    private _staff: string;
    private _renter: string;
    private _roomName: string;
    private _timeStart: number;
    private _timeEnd: number;
    private _totalMoney: number;

    constructor(staff: string, renter: string, roomName: string, timeStart: number) {
        this._staff = staff;
        this._renter = renter;
        this._roomName = roomName;
        this._timeStart = timeStart;
        this._timeEnd = 0;
        this._totalMoney = 0;
        this.id = Order._auto
        Order._auto++
    }

    get staff(): string {
        return this._staff;
    }

    set staff(value: string) {
        this._staff = value;
    }

    get renter(): string {
        return this._renter;
    }

    set renter(value: string) {
        this._renter = value;
    }

    get roomName(): string {
        return this._roomName;
    }

    set roomName(value: string) {
        this._roomName = value;
    }

    get timeStart(): number {
        return this._timeStart;
    }

    set timeStart(value: number) {
        this._timeStart = value;
    }

    get timeEnd(): number {
        return this._timeEnd;
    }

    set timeEnd(value: number) {
        this._timeEnd = value;
    }

    get totalMoney(): number {
        return this._totalMoney;
    }

    set totalMoney(value: number) {
        this._totalMoney = value;
    }
}