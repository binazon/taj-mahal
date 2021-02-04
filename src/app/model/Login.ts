class Login {
    private _tourist: Tourist;
    private _passwd: String;

    constructor(tourist: Tourist, passwd: String) {
        this._tourist = tourist;
        this._passwd = passwd;
    }

    public get tourist(): Tourist {
        return this._tourist;
    }
    public set tourist(value: Tourist) {
        this._tourist = value;
    }

    public get passwd(): String {
        return this._passwd;
    }
    public set passwd(value: String) {
        this._passwd = value;
    }
}