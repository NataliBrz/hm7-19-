class Person {
    constructor(name, surname, rate, days, salary) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
        this.salary = salary;


    }

    getSalary() {
        this.salary = this.rate * this.days;
        return this.salary
    }
    worker() {
        console.log(person1.name);
        console.log(person1.surname);
        console.log(person1.rate);
        console.log(person1.days);
        console.log(person1.getSalary());
    }
}


let person1 = new Person('Иван', 'Иванов', 10, 31);
person1.worker()
