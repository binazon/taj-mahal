export class Reservation {

    private _idReservation?: Number;
    private _dateReservation: Date;
    private _amountReservation: Number;
    private _numberPerson: Number;

    constructor(
        _dateReservation: Date,
        _amountReservation: Number,
        _numberPerson: Number
    ) {
        this._dateReservation = _dateReservation
        this._amountReservation = _amountReservation
        this._numberPerson = _numberPerson
    }

    public get idReservation(): Number {
        return this._idReservation;
    }

    public get numberPerson(): Number {
        return this._numberPerson;
    }
    public set numberPerson(value: Number) {
        this._numberPerson = value;
    }

    public get amountReservation(): Number {
        return this._amountReservation;
    }
    public set amountReservation(value: Number) {
        this._amountReservation = value;
    }

    public get dateReservation(): Date {
        return this._dateReservation;
    }
    public set dateReservation(value: Date) {
        this._dateReservation = value;
    }
}