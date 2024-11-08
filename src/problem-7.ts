//Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

// create claas for Car
class Car{
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // define function get age for car
    getCarAge(): number{
        const currentYear = new Date().getFullYear();
        const makeYear = this.year;
        return currentYear - makeYear;
    }
}


// const car = new Car("Honda", "Civic", 2018);
// console.log(`${car.getCarAge()} (assuming current year is ${new Date().getFullYear()}) `);