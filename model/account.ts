export class Account {
    private _id: number = 0;
    private static _auto: number = 0
    private _userName: string;
    private _password: string;
    private _numberPhone: string;
    private _address: string;
    private _email: string;
    private _fullName: string;
    private _age: number;
    private _status: boolean;

    constructor(userName: string, password: string, numberPhone: string, address: string, email: string, fullName: string, age: number) {
        this._userName = userName;
        this._password = password;
        this._numberPhone = numberPhone;
        this._address = address;
        this._email = email;
        this._fullName = fullName;
        this._age = age;
        this._status = true;
        this._id = Account._auto
        Account._auto++;
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

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get numberPhone(): string {
        return this._numberPhone;
    }

    set numberPhone(value: string) {
        this._numberPhone = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}