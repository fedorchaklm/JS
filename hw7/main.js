/**
 #XjJuucOMR0
 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
 створити пустий масив, наповнити його 10 об'єктами new User(....)
 **/
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(9246, "Ivan", "Ivanov", "ivan.ivanov@gmail.com", "+380671234567"),
    new User(2451, "Olga", "Petrova", "olga.petrova@gmail.com", "+380631234567"),
    new User(7583, "Andriy", "Shevchenko", "andriy.shevchenko@gmail.com", "+380501234567"),
    new User(4475, "Anna", "Kovalenko", "anna.kovalenko@gmail.com", "+380991234567"),
    new User(2126, "Dmytro", "Bondarenko", "dmytro.bondarenko@gmail.com", "+380681234567"),
    new User(6485, "Tetiana", "Sokolova", "tetiana.sokolova@gmail.com", "+380671987654"),
    new User(7754, "Oleh", "Tymoshenko", "oleh.tymoshenko@gmail.com", "+380631987654"),
    new User(1128, "Maria", "Chernenko", "maria.chernenko@gmail.com", "+380501987654"),
    new User(3489, "Mykola", "Moroz", "mykola.moroz@gmail.com", "+380991987654"),
    new User(2110, "Svitlana", "Lysenko", "svitlana.lysenko@gmail.com", "+380681987654"),
];

console.log(users);

/**
 #2ikXsE2WiKZ
 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
 **/
const filteredUsers = users.filter(user => user.id % 2 === 0);

console.log(filteredUsers);

/**
 #pOeHKct
 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
 **/
const sortedUsers = users.sort((user1, user2) => user1.id - user2.id);

console.log(sortedUsers);

/**
 #nkMXISv
 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
 створити пустий масив, наповнити його 10 об'єктами Client
 **/
class Client {
    constructor(id, name, surname, email, phone, ...products) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = products;
    }
}

class Product {
    constructor(title, description, category, price) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
    }
}

const product1 = new Product('apples', 'fresh fruits', 'fruits', 35);
const product2 = new Product('kiwi', 'fresh fruits', 'fruits', 94);
const product3 = new Product('oranges', 'fresh fruits', 'fruits', 73);

const clients = [
    new Client(9246, "Ivan", "Ivanov", "ivan.ivanov@gmail.com", "+380671234567", product1),
    new Client(2451, "Olga", "Petrova", "olga.petrova@gmail.com", "+380631234567", product1, product2),
    new Client(7583, "Andriy", "Shevchenko", "andriy.shevchenko@gmail.com", "+380501234567", product1, product2, product3),
    new Client(4475, "Anna", "Kovalenko", "anna.kovalenko@gmail.com", "+380991234567", product2),
    new Client(2126, "Dmytro", "Bondarenko", "dmytro.bondarenko@gmail.com", "+380681234567", product1, product2),
    new Client(6485, "Tetiana", "Sokolova", "tetiana.sokolova@gmail.com", "+380671987654", product1, product2, product3),
    new Client(7754, "Oleh", "Tymoshenko", "oleh.tymoshenko@gmail.com", "+380631987654", product1, product2, product3),
    new Client(1128, "Maria", "Chernenko", "maria.chernenko@gmail.com", "+380501987654", product2),
    new Client(3489, "Mykola", "Moroz", "mykola.moroz@gmail.com", "+380991987654", product1),
    new Client(2110, "Svitlana", "Lysenko", "svitlana.lysenko@gmail.com", "+380681987654", product1, product2, product3),
];

console.log(clients);

/**
 #8abtVjRv
 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 **/
const sortedClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);

console.log(sortedClients);

/**
 #vV9a6584I5
 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 -- changeYear (newValue) - змінює рік випуску на значення newValue
 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 **/
function Car(model, brand, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`);
    }
    this.info = function () {
        console.log(`Модель - ${this.model}, Виробник - ${this.brand}, Рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, Об'єм двигуна - ${this.engineCapacity}`);
    }
    this.increaseMaxSpeed = function (value) {
        if (value > 0) {
            this.maxSpeed += value;
        }
    }
    this.changeYear = function (year) {
        if (year > 0) {
            this.year = year;
        }
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

function Driver(name, experience) {
    this.name = name;
    this.experience = experience;
}

const driver = new Driver("Ann", 10);

const car = new Car("Kuga", "Ford", 2019, 200, 1.6);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.drive();
car.changeYear(2020);
car.info();
car.addDriver(driver);
console.log(car);

/**
 #5kla3yMpgp
 - (Те саме, тільки через клас)
 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 -- changeYear (newValue) - змінює рік випуску на значення newValue
 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 **/
class SpecialCar {
    constructor(model, brand, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`);
    }

    info() {
        console.log(`Модель - ${this.model}, Виробник - ${this.brand}, Рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, Об'єм двигуна - ${this.engineCapacity}`);
    }

    increaseMaxSpeed(value) {
        if (value > 0) {
            this.maxSpeed += value;
        }
    }

    changeYear(year) {
        if (year > 0) {
            this.year = year;
        }
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

class SpecialDriver {
    constructor(name, experience) {
        this.name = name;
        this.experience = experience;
    }
}

const specDriver = new SpecialDriver("Ann", 10);

const specCar = new SpecialCar("Kuga", "Ford", 2019, 200, 1.6);
console.log(specCar);
specCar.drive();
specCar.info();
specCar.increaseMaxSpeed(20);
specCar.drive();
specCar.changeYear(2020);
specCar.info();
specCar.addDriver(specDriver);
console.log(specCar);

/**
 #zg6Fifnqig
 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
 Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 За допомоги циклу знайти яка попелюшка повинна бути з принцом.
 Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
 **/
class Chinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const chinderellas = [
    new Chinderella("Ann", 25, 38),
    new Chinderella("Kate", 36, 40),
    new Chinderella("Mary", 18, 38),
    new Chinderella("Jane", 22, 35),
    new Chinderella("Lisa", 31, 37),
    new Chinderella("Sue", 19, 36),
    new Chinderella("Viki", 24, 36),
    new Chinderella("Jessica", 32, 39),
    new Chinderella("Emily", 20, 37),
    new Chinderella("Mia", 21, 39)
];

const prince = new Prince("John", 34, 35);


for (const chinderella of chinderellas) {
    if (chinderella.footSize === prince.shoe) {
        prince.chinderella = chinderella;
    }
}

console.log(prince);

const chinderellaForPrince = chinderellas.find(chinderella => chinderella.footSize === prince.shoe);
console.log(chinderellaForPrince);

/**
 #gsKLAsNWM
 *Через Array.prototype. створити власний foreach, filter
 **/

Array.prototype.customForEach = function (callback) {
    for (const item of this) {
        callback(item);
    }
}
chinderellas.customForEach(chinderella => console.log(chinderella.name));

Array.prototype.customFilter = function (predicate) {
    const filteredArray = [];
    for (const item of this) {
        if (predicate(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}

const filteredCinderellas = chinderellas.customFilter(chinderella => chinderella.footSize < 39);
console.log(filteredCinderellas);
