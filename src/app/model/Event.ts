export class Events {
    private _idEvent?: Number;
    private _nameEvent: String;
    private _dateStartEvent: Date;
    private _dateEndEvent: Date;
    private _amountEvent: Number;
    private _image: String;

    constructor(nameEvent: String, dateStartEvent: Date, dateEndEvent: Date,
        amountEvent: Number, image: String) {
        this._nameEvent = nameEvent;
        this._dateStartEvent = dateStartEvent;
        this._dateEndEvent = dateEndEvent;
        this._amountEvent = amountEvent;
        this._image = image;
    }

    public get idEvent(): Number {
        return this._idEvent;
    }

    public get nameEvent(): String {
        return this._nameEvent;
    }
    public set nameEvent(value: String) {
        this._nameEvent = value;
    }

    public get dateStartEvent(): Date {
        return this._dateStartEvent;
    }
    public set dateStartEvent(value: Date) {
        this._dateStartEvent = value;
    }

    public get dateEndEvent(): Date {
        return this._dateEndEvent;
    }
    public set dateEndEvent(value: Date) {
        this._dateEndEvent = value;
    }

    public get amountEvent(): Number {
        return this._amountEvent;
    }
    public set amountEvent(value: Number) {
        this._amountEvent = value;
    }

    public get image(): String {
        return this._image;
    }
    public set image(value: String) {
        this._image = value;
    }
}