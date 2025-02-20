import { Transport } from "./transport";

namespace TransportApp {
    const owner1 = new Transport.OwnerDetails(
        'Иванов',
        'Иван',
        'Иванович',
        new Date(1985, 5, 15),
        Transport.OwnerDocumentType.Passport,
        '1234',
        '567890'
    );

    const car1 = new Transport.CarDetails(
        'Toyota',
        'Camry',
        2020,
        'VIN1234567890',
        'A123BC',
        owner1,
        Transport.BodyType.Sedan,
        Transport.CarType.B_class
    );

    const bike1 = new Transport.MotorbikeDetails(
        'Yamaha',
        'YZF-R1',
        2022,
        'VIN0987654321',
        'B456CD',
        owner1,
        'Aluminum',
        true
    );

    const storage = new Transport.VehicleStorageDetails<Transport.Vehicle>();
    storage.add_vehicle(car1);
    storage.add_vehicle(bike1);

    console.log('Все транспортные средства:');
    storage.get_all_vehicle().forEach(vehicle => {
        if (vehicle instanceof Transport.CarDetails) {
            vehicle.printVehicleInfo();
        } else if (vehicle instanceof Transport.MotorbikeDetails) {
            vehicle.printVehicleInfo();
        }
    });
}
