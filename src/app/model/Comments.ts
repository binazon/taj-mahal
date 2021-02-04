class Comments {

    private _idComment: Number;
    private _message: String;
    private _reservation: Reservation;

    constructor(idComment: Number, message: String, reservarion: Reservation) {
        this._idComment = idComment;
        this._message = message;
        this._reservation = reservarion;
    }

    public get idComment(): Number {
        return this._idComment;
    }
    public set idComment(value: Number) {
        this._idComment = value;
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