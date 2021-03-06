import { Reservation } from "./Reservation";
import { Tourist } from "./Tourist";

export class HistoryModel {

    private _idHistory?: Number;
    private _tourist: Tourist;
    private _reservations: Set<Reservation>;

    constructor(tourist: Tourist, reservations: Set<Reservation>) {
        this._tourist = tourist;
        this._reservations = reservations;
    }

    public get idHistory(): Number {
        return this._idHistory;
    }

    public get tourist(): Tourist {
        return this._tourist;
    }
    public set tourist(value: Tourist) {
        this._tourist = value;
    }

    public get reservations(): Set<Reservation> {
        return this._reservations;
    }
    public set reservations(value: Set<Reservation>) {
        this._reservations = value;
    }
}