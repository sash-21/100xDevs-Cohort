interface Car {
    name: string,
    company: string,
    make: string,
    speed: number,
    release: Date
};

type CarDetails = Pick<Car, 'name' | 'company' | 'make' | 'speed'>;
type CarDetailsOptional = Partial<CarDetails>;

function showCarDetails(cars: CarDetailsOptional[]): void {
    for(let i = 0; i < cars.length; i++) {
        console.log(`Car Name: ${cars[i].name} \nCompany: ${cars[i].company} \nMake: ${cars[i].make} \nTop Speed: ${cars[i].speed}kmph`);
    }
}

// didn't passed the speed field for bugatti since Partial made the field optional
showCarDetails([
  {
    name: "Jesko Absolut",
    company: "Koenigsegg",
    make: "Swedish",
    speed: 550
  },
  {
    name: "Chiron SuperSport 300",
    company: "Bugatti",
    make: "French",
    // speed: 510
  } 
]);