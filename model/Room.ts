
enum Status {
    A = 'drum',
    B = 'rented',
    C = 'maintenance'
}
export class Room {
    private _id: number = 0
    private static _auto = 0
    private _name: string;
    private _price: number;
    private _Bedroom: number;
    private _toilet: number;
    private _status: Status;


    constructor(name: string, price: number, Bedroom: number, toilet: number, status: Status) {
        this._name = name;
        this._price = price
        this._Bedroom = Bedroom;
        this._toilet = toilet;
        this._status = status;
        this._id = Room._auto
        Room._auto++;

    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get Bedroom(): number {
        return this._Bedroom;
    }

    set Bedroom(value: number) {
        this._Bedroom = value;
    }

    get toilet(): number {
        return this._toilet;
    }

    set toilet(value: number) {
        this._toilet = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    static get auto(): number {
        return this._auto;
    }

    static set auto(value: number) {
        this._auto = value;
    }

    get status(): Status {
        return this._status;
    }

    set status(value: Status) {
        this._status = value;
    }
}