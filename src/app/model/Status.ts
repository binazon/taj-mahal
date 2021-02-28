export class Status {

    private _idStatus?: Number;
    private _creationDate: Date;
    private _amountVisit: Number;
    private _image: String;

    constructor(
        creationDate: Date,
        amountVisit: Number,
        image: String
    ) {
        this._creationDate = creationDate
        this._amountVisit = amountVisit
        this._image = image
    }

    public get idStatus(): Number {
        return this._idStatus;
    }

    public get image(): String {
        return this._image;
    }
    public set image(value: String) {
        this._image = value;
    }

    public get amountVisit(): Number {
        return this._amountVisit;
    }
    public set amountVisit(value: Number) {
        this._amountVisit = value;
    }

    public get creationDate(): Date {
        return this._creationDate;
    }
    public set creationDate(value: Date) {
        this._creationDate = value;
    }
}