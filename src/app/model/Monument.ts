class Monument{
    
    private _entitledMonument: String;
    private _adresseMonument: String;
    private _capacityMonument: Number;
    private _image: String;


    constructor(_entitledMonument: String, _adresseMonument: String, _capacityMonument: Number, 
        _image: String){
        this._entitledMonument = _entitledMonument;
        this._adresseMonument = _adresseMonument;
        this._capacityMonument = _capacityMonument;
        this._image = _image;
    }


    public get entitledMonument(): String {
        return this._entitledMonument;
    }
    public set entitledMonument(value: String) {
        this._entitledMonument = value;
    }
    
    public get adresseMonument(): String {
        return this._adresseMonument;
    }
    public set adresseMonument(value: String) {
        this._adresseMonument = value;
    }
    
    public get capacityMonument(): Number {
        return this._capacityMonument;
    }

    public set capacityMonument(value: Number) {
        this._capacityMonument = value;
    }
    
    public get image(): String {
        return this._image;
    }

    public set image(value: String) {
        this._image = value;
    }
}