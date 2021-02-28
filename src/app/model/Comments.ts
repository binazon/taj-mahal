import { Reservation } from "./Reservation";

export class Comments {

    private _idComment?: Number;
    private _message: String;
    private _reservation: Reservation;

    constructor(message: String, reservarion: Reservation) {
        this._message = message;
        this._reservation = reservarion;
    }

    public get idComment(): Number {
        return this._idComment;
    }

    public get message(): String {
        return this._message;
    }
    public set message(value: String) {
        this._message = value;
    }

    public get reservation(): Reservation {
        return this._reservation;
    }
    public set reservation(value: Reservation) {
        this._reservation = value;
    }
}