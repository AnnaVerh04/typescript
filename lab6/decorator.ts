export enum OwnerDocumentType {
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
    public surname: string;
    public name: string;
    public middle_name: string;
    public date_of_birth: Date;
    public document_type: OwnerDocumentType;
    public document_series: string;
    public document_number: string;

    constructor(
        surname: string,
        name: string,
        middle_name: string,
        date_of_birth: Date,
        document_type: OwnerDocumentType,
        document_series: string,
        document_number: string
    ) {
        this.surname = surname;
        this.name = name;
        this.middle_name = middle_name;
        this.date_of_birth = date_of_birth;
        this.document_type = document_type;
        this.document_series = document_series;
        this.document_number = document_number;
    }

    display_owner_info(): void {
        console.log(`Фамилия: ${this.surname}`);
        console.log(`Имя: ${this.name}`);
        console.log(`Отчество: ${this.middle_name}`);
        console.log(`Дата рождения: ${this.date_of_birth}`);
        console.log(`Тип документа: ${this.document_type}`);
        console.log(`Серия документа: ${this.document_series}`);
        console.log(`Номер документа: ${this.document_number}`);
    }
}

class VehicleDetails implements Vehicle {
    public brand: string;
    public model: string;
    public year_of_release: number;
    public vin: string;
    public registration_number: string;
    public owner_info: Owner;

    constructor(
        brand: string,
        model: string,
        year_of_release: number,
        vin: string,
        registration_number: string,
        owner_info: Owner
    ) {
        this.brand = brand;
        this.model = model;
        this.year_of_release = year_of_release;
        this.vin = vin;
        this.registration_number = registration_number;
        this.owner_info = owner_info;
    }

    display_vehicle_info(): void {
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year_of_release}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.registration_number}`);
    }
}

function freezeClass<T extends { new(...args: any[]): {} }>(constructor: T) {
    Object.freeze(constructor.prototype);
    return constructor;
}

function capitalizeMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    if (typeof originalMethod !== 'function') {
        throw new TypeError(`@capitalizeMethod can only be applied to methods`);
    }
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
}

interface Car extends Vehicle {
    body_type: BodyType;
    car_type: CarType;
}

@freezeClass
class CarDetails extends VehicleDetails implements Car {
    public body_type: BodyType;
    public car_type: CarType;

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
        this.body_type = body_type;
        this.car_type = car_type;
    }

    @capitalizeMethod
    printVehicleInfo(): void {
        super.display_vehicle_info();
        console.log(`Тип кузова: ${this.body_type}`);
        console.log(`Класс автомобиля: ${this.car_type}`);
    }
}

interface Motorbike extends Vehicle {
    frame_type: string;
    for_sport: boolean;
}

class MotorbikeDetails extends VehicleDetails implements Motorbike {
    public frame_type: string;
    public for_sport: boolean;

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
        this.frame_type = frame_type;
        this.for_sport = for_sport;
    }

    @capitalizeMethod
    printVehicleInfo(): void {
        super.display_vehicle_info();
        console.log(`Тип рамы: ${this.frame_type}`);
        console.log(`Для спорта: ${this.for_sport ? 'Да' : 'Нет'}`);
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
