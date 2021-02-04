class Tourist {
    private _username: String;
    private _name: String;
    private _surname: String;
    private _email: String;
    private _phoneNumber: String;

    constructor(
        username: String,
        name: String,
        surname: String,
        email: String,
        phoneNumber: String
    ) {
        this._username = username
        this._name = name
        this._surname = surname
        this._email = email
        this._phoneNumber = phoneNumber
    }

    public get phoneNumber(): String {
        return this._phoneNumber;
    }

    public set phoneNumber(value: String) {
        this._phoneNumber = value;
    }

    public get email(): String {
        return this._email;
    }

    public set email(value: String) {
        this._email = value;
    }

    public get surname(): String {
        return this._surname;
    }

    public set surname(value: String) {
        this._surname = value;
    }

    public get name(): String {
        return this._name;
    }

    public set name(value: String) {
        this._name = value;
    }

    public get username(): String {
        return this._username;
    }

    public set username(value: String) {
        this._username = value;
    }
}