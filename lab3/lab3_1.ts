enum OwnerDocumentType {
    Passport = 'Passport',
    DriverLicense = 'Driving license',
    IDCard = 'Identification card',
}

enum BodyType {
    Crossover = 'Crossover',
    Sedan = 'Sedan',
    Cabriolet = 'Cabriolet',
    Hatchback = 'Hatchback',
}

enum CarType {
    A_class = 'A-class',
    B_class = 'B-class',
    C_class = 'C-class',
    D_class = 'D-class',
}

interface Owner {
    surname: string;
    name: string;
    middle_name: string;
    date_of_birth: Date;
    document_type: OwnerDocumentType;
    document_series: string;
    document_number: string;
    display_owner_info(): void;
}

interface Vehicle {
    brand: string;
    model: string;
    year_of_release: number;
    vin: string;
    registration_number: string;
    owner_info: Owner;
    display_vehicle_info(): void;
}

class OwnerDetails implements Owner {
    private _surname: string;
    private _name: string;
    private _middle_name: string;
    private _date_of_birth: Date;
    private _document_type: OwnerDocumentType;
    private _document_series: string;
    private _document_number: string;

    constructor(
        surname: string,
        name: string,
        middle_name: string,
        date_of_birth: Date,
        document_type: OwnerDocumentType,
        document_series: string,
        document_number: string
    ) {
        this._surname = surname;
        this._name = name;
        this._middle_name = middle_name;
        this._date_of_birth = date_of_birth;
        this._document_type = document_type;
        this._document_series = document_series;
        this._document_number = document_number;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get middle_name(): string {
        return this._middle_name;
    }

    set middle_name(value: string) {
        this._middle_name = value;
    }

    get date_of_birth(): Date {
        return this._date_of_birth;
    }

    set date_of_birth(value: Date) {
        this._date_of_birth = value;
    }

    get document_type(): OwnerDocumentType {
        return this._document_type;
    }

    set document_type(value: OwnerDocumentType) {
        this._document_type = value;
    }

    get document_series(): string {
        return this._document_series;
    }

    set document_series(value: string) {
        this._document_series = value;
    }

    get document_number(): string {
        return this._document_number;
    }

    set document_number(value: string) {
        this._document_number = value;
    }

    display_owner_info(): void {
        console.log(`Фамилия:`, this.surname);
        console.log(`Имя:`, this._name);
        console.log(`Отчество:`, this._middle_name);
        console.log(`Дата рождения:`, this.date_of_birth);
        console.log(`Тип документа:`, this._document_type);
        console.log(`Серия документа:`, this._document_series);
        console.log(`Номер документа:`, this._document_number);
    }
}

class VehicleDetails implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year_of_release: number;
    private _vin: string;
    private _registration_number: string;
    private _owner_info: Owner;

    constructor(
        brand: string,
        model: string,
        year_of_release: number,
        vin: string,
        registration_number: string,
        owner_info: Owner
    ) {
        this._brand = brand;
        this._model = model;
        this._year_of_release = year_of_release;
        this._vin = vin;
        this._registration_number = registration_number;
        this._owner_info = owner_info;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get year_of_release(): number {
        return this._year_of_release;
    }

    set year_of_release(value: number) {
        this._year_of_release = value;
    }

    get vin(): string {
        return this._vin;
    }

    set vin(value: string) {
        this._vin = value;
    }

    get registration_number(): string {
        return this._registration_number;
    }

    set registration_number(value: string) {
        this._registration_number = value;
    }

    get owner_info(): Owner {
        return this._owner_info;
    }

    set owner_info(value: Owner) {
        this._owner_info = value;
    }

    display_vehicle_info(): void {
        console.log(`Марка:`, this._brand);
        console.log(`Модель:`, this._model);
        console.log(`Год выпуска:`, this._year_of_release);
        console.log(`VIN-номер:`, this._vin);
        console.log(`Регистрационный номер:`, this._registration_number);
    }
}

interface Car extends Vehicle {
    body_type: BodyType;
    car_type: CarType;
}

class CarDetails extends VehicleDetails implements Car {
    private _body_type: BodyType;
    private _car_type: CarType;

    constructor(
        brand: string,
        model: string,
        year_of_release: number,
        vin: string,
        registration_number: string,
        owner_info: Owner,
        body_type: BodyType,
        car_type: CarType
    ) {
        super(brand, model, year_of_release, vin, registration_number, owner_info);
        this._body_type = body_type;
        this._car_type = car_type;
    }

    get body_type(): BodyType {
        return this._body_type;
    }

    set body_type(value: BodyType) {
        this._body_type = value;
    }

    get car_type(): CarType {
        return this._car_type;
    }

    set car_type(value: CarType) {
        this._car_type = value;
    }

    printVehicleInfo(): void {
        super.display_vehicle_info();
        console.log(`Тип кузова:`, this._body_type);
        console.log(`Класс автомобиля:`, this._car_type);
    }
}

interface Motorbike extends Vehicle {
    frame_type: string;
    for_sport: boolean;
}

class MotorbikeDetails extends VehicleDetails implements Motorbike {
    private _frame_type: string;
    private _for_sport: boolean;

    constructor(
        brand: string,
        model: string,
        year_of_release: number,
        vin: string,
        registration_number: string,
        owner_info: Owner,
        frame_type: string,
        for_sport: boolean
    ) {
        super(brand, model, year_of_release, vin, registration_number, owner_info);
        this._frame_type = frame_type;
        this._for_sport = for_sport;
    }

    get frame_type(): string {
        return this._frame_type;
    }

    set frame_type(value: string) {
        this._frame_type = value;
    }

    get for_sport(): boolean {
        return this._for_sport;
    }

    set for_sport(value: boolean) {
        this._for_sport = value;
    }

    printVehicleInfo(): void {
        super.display_vehicle_info();
        console.log(`Тип рамы:`, this._frame_type);
        console.log(`Для спорта:`, this._for_sport ? 'Да' : 'Нет');
    }
}

interface VehicleStorage<T extends Vehicle> {
    repository_date: Date;
    vehicles: T[];
    get_all_vehicle(): T[];

    add_vehicle(vehicle: T): void;
}

class VehicleStorageDetails<T extends Vehicle> implements VehicleStorage<T> {
    private _repository_date: Date;
    private _vehicles: T[];

    constructor() {
        this._repository_date = new Date();
        this._vehicles = [];
    }

    get_all_vehicle(): T[] {
        return this._vehicles;
    }

    add_vehicle(vehicle: T): void {
        this._vehicles.push(vehicle);
    }

    get repository_date() {
        return this._repository_date;
    }

    get vehicles() {
        return this._vehicles;
    }
}

const owner1 = new OwnerDetails(
    'Иванов',
    'Иван',
    'Иванович',
    new Date(1985, 5, 15),
    OwnerDocumentType.Passport,
    '1234',
    '567890'
);

const car1 = new CarDetails(
    'Toyota',
    'Camry',
    2020,
    'VIN1234567890',
    'A123BC',
    owner1,
    BodyType.Sedan,
    CarType.B_class
);

const bike1 = new MotorbikeDetails(
    'Yamaha',
    'YZF-R1',
    2022,
    'VIN0987654321',
    'B456CD',
    owner1,
    'Aluminum',
    true
);

const storage = new VehicleStorageDetails<Vehicle>();
storage.add_vehicle(car1);
storage.add_vehicle(bike1);

console.log('Все транспортные средства:');
storage.get_all_vehicle().forEach(vehicle => {
    if (vehicle instanceof CarDetails) {
        vehicle.printVehicleInfo();
    } else if (vehicle instanceof MotorbikeDetails) {
        vehicle.printVehicleInfo();
    }
});
