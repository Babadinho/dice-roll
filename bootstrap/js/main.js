
// let x = 22
// console.log(typeof(x))

// x = true

// console.log(typeof(x))

// x = "2"

// console.log(typeof(x))

// let y = 2
// let z = String(y)

// console.log(typeof(z))


// let x = 22
// console.log(typeof(x))

// x = true

// console.log(typeof(x))

// x = "2"

// console.log(typeof(x))

// let y = "welcome"
// alert(Number(y))
// console.log(Number(y))
// let z = Boolean(undefined)

// // console.log(typeof(z))

// alert(z)

// let age = prompt("How old are you?")

// age <= 18 you are not eligible to enter
// age > 18 - 21 you are allowed to enter but not allowed to drink
// age > 21 you can enjoy the party.

// let age = prompt("How old are you?")

// if (age <= 18) {
//     alert("you are not eligible to enter.")
// } else if(age > 21) {
//     alert("you can enjoy the party.")
// } else{
//     alert("you are allowed to enter but not allowed to drink.") 
// }


// let age = prompt("How old are you?")

// if (age <= 18) {
//     alert("you are not eligible to enter.")
// } else if(age > 18 && age <= 21) {
//     alert("you are allowed to enter but not allowed to drink.")
// } else{
//     alert("you can enjoy the party.") 
// }

//GUESSING GAME

// let secretNumber = 7

// let userName = prompt("Welcome, please enter your name.")

// let guess = prompt("Enter a Secret number from 1 - 10.")

// if (guess == secretNumber) {
//     alert(`yes, the secret number is ${secretNumber}. Congratulations! ${userName} you won!!`)
// } else if (guess >= 5 && guess <= 6) {
//     alert(`you are close to the secret number. try again`)
// } else if (guess > 7 && guess <= 10){
//     alert(`you are close to the secret number. try again.. Move backwards this time`)
// } else {
//     alert(`Incorrect. Try again`)
// }

// let userName = prompt("Welcome, please enter your name.")

// let number = prompt("Enter a number.")
// let random = Math.floor(Math.random() * 10) + 1;
// console.log()
    
// console.log(random);
// if (number%2 == 0){
//     alert(`number ${number} is an even number`)
// }else if( number/random == 0 && number%random == 0){
//     alert(`number ${number} is a prime number`)
// }else{
//     alert(`number ${number} is an odd number`)
// }

// 1 > 5 ? console.log("True") : console.log("False")

// let i = 0;

// while (i<10) {
//     console.log(i);
//     i+=2;
// }

// in latest 3 ganes Johns team = 89, 120, 1033
// mike: 116, 94, 123

// calculate the average score for each team
// decide which teams wins in average(highest average score) and print the winner to the console, also include the average score in the output
// change the scores to show different winners, dont forget to take into account there might be a draw.Johns
// MAry also plays basketball and her team scored 97,134,105 points, like before log the average winner to the console. Youll need the && operator to take the decision.
// Like before, change the score to generate different winners.

// let jonhsTeamTotal = 89 + 120 + 103;
// let mikesTeamTotal = 116 + 94 + 123;

// let totalGames = 3;

// let johnsTeamAverage = jonhsTeamTotal/totalGames;
// let mikesTeamAverage = mikesTeamTotal/totalGames;

// if (johnsTeamAverage > mikesTeamAverage){
//     console.log("John's team wins the game with an average score of " + johnsTeamAverage + " points.")
// }else if(mikesTeamAverage > johnsTeamAverage){
//     console.log("Mikes's team wins the game with an average score of " + mikesTeamAverage + " points.")
// }else if(johnsTeamAverage == mikesTeamAverage){
//     console.log("Game ends in a draw with Mike's team scoring " + mikesTeamAverage + " points and John's team scoring " + johnsTeamAverage + " points.")
// }else{
//     console.log("Game winner isn't determined yet")
// }

// let jonhsTeamTotal = 89 + 120 + 103;
// let mikesTeamTotal = 116 + 94 + 123;
// let marysTeamTotal = 97 + 134 + 105;

// let totalGames = 3;

// let johnsTeamAverage = jonhsTeamTotal/totalGames;
// let mikesTeamAverage = mikesTeamTotal/totalGames;
// let marysTeamAverage = marysTeamTotal/totalGames;

// console.log("John's team: " + johnsTeamAverage + " points");
// console.log("Mike's team: " + mikesTeamAverage + " points");
// console.log("Mary's team: " + marysTeamAverage + " points");

// if (johnsTeamAverage > mikesTeamAverage && johnsTeamAverage > marysTeamAverage){
//     console.log("John's team wins the game with an average score of " + johnsTeamAverage + " points.")
// }else if(mikesTeamAverage > johnsTeamAverage && mikesTeamAverage > marysTeamAverage){
//     console.log("Mikes's team wins the game with an average score of " + mikesTeamAverage + " points.")
// }else if(marysTeamAverage > johnsTeamAverage && marysTeamAverage > mikesTeamAverage){
//     console.log("Mary's team wins the game with an average score of " + marysTeamAverage + " points.")
// }else if(johnsTeamAverage == mikesTeamAverage && johnsTeamAverage == marysTeamAverage){
//     console.log(`Game ends in a draw.
// John's Team: ${johnsTeamAverage} points.
// Mike's Team: ${mikesTeamAverage} points.
// Marry's Team: ${marysTeamAverage} points.`)
// }else{
//     console.log("Game winner isn't determined yet")
// }

// hours to seconds
// minutes to seconds
// 2 integers a and b check if the first can be divided by the other, if yes log yes else log false
// write a simple app that takes the base and height of a triangle and returns the area. 1/2 base x height  
// 2  numbers if sum is more than 100, return false
// a farmer has 2 types of animals. Chicken and goat. tell farmer how many legs for chicken and goat.


// let hour = prompt("Enter time in hours, eg: 4.");

// let hoursToMinutes = hour*60;
// let hoursToSeconds = minutesToSeconds*60;

// alert(`there are ${hoursToSeconds} seconds in ${hour} hour(s) and ${hoursToMinutes} minutes in ${hour} hour(s).`)



// let a = 3;
// let b = 5;

// if (a%b == 0) {
//     alert(`Number can be divided.`)
// }else {
//     alert(`Number cannot be divided.`)
// }



// let base = prompt("Enter the base of a Triangle");
// let height = prompt("Enter the height of a Triangle");

// let area = (height*base) / 2;

// alert(`The area of the triangle is ${area} cm.`)



// let num1 = prompt("Enter your first number");
// let num2 = prompt("Enter your second number");

// if (Number(num1) + Number(num2) > 100) {
//     alert(`False! the sum of your numbers is ${Number(num1) + Number(num2)} and it is greater than 100.`)
// } else {
//     alert(`True! the sum of your numbers is ${Number(num1) + Number(num2)} and it is not greater than 100.`)
// }


// let animal = prompt("Enter what type of animal you own between a Goat or a Chicken")

// if(animal == "Goat") {
//     let totalGoat = prompt("How many Goats do you own?")
//     alert(`Your goat(s) have ${totalGoat * 4} legs.`)
// } else if (animal == "Chicken"){
//     let totalChicken = prompt("How many Chicken do you own?")
//     alert(`Your Chicken(s) have ${totalChicken * 2} legs.`)
// } else {
//     alert(`Please enter the animal correctly.`)
// }

// let str = 'beautiful'
// // for (let i = 0; i<str.length; i++) {
// //     console.log(str[i]);
// // }

// let str = 'beautiful';
// let i = 0;
// while (i<str.length) {
//     console.log(str[i])
//     i++;
// }

// function showMessage(name, age) {
//     console.log("Hello " + name + " you are " + age + " years old.")
// }

// showMessage('John', 20);


// function sum(a,b) {
//     alert(`The sum of ${a} and ${b} is ${a+b}.`);
// }

// sum(50, 40);

// let multiple = function (a, b) {
//     alert(a*b);
// }

// multiple(5,6);



// write a function that takes a string and converts the first alphabet to uppercase
// create a variable assign a value. write a function, search the alphabet passed if its inside the string. if there is, log the position if not log there is no key.
// write a function that takes a string and returns the string without the first alphabet


// function uppercase(alphabet) {
//     alert(alphabet[0].toUpperCase() + alphabet.substring(1))
// }

// uppercase('congratulations')



// let str = 'Hello';

// function search(alphabet) {
//     if(str.includes(alphabet)) {
//         alert(`${alphabet} is in position ${str.indexOf(alphabet)}.`)
//     }else {
//         alert(`${alphabet} not found.`) 
//     }
// }

// search('l');




// function without(alphabet) {
//     alert(alphabet.substring(1))
// }

// without('congratulations')

// let multiple = () => alert(`Hello`);

// multiple();

// let name  = 'Hello'
// console.log(name.substring(0,1).toUpperCase() + name.substring(1))

// let greeting = (a,b,name) => {
//     this.name = b;
//     console.log(this.name);
// }

// greeting(5,3,6);

// console.log(result);
// let arr = ['jerry', 'nonso', 50, 'ret', 'met'];

// let newArr = arr.slice(1,3);

// arr.forEach(function(item, index) {
//     // console.log(`${item}: index ${index}`);
// })

// console.log(arr);
// console.log(newArr);

// console.log(arr.includes('nonso'));

// let arr = [10, 20, 5, 45,];

// let total = arr.reduce((total, number) => total + number);

// console.log(total);


// let arr = ['jerry', 'nonso', 50, 'ret', 'met'];

// function search(name) {
//     if(arr.includes(name)) {
//         alert(`We found ${name} in the array.`)
//     }else {
//         alert(`${name} not found.`) 
//     }
// }

// search('nonso');

//Joining Array
// let arr = ['jerry', 'nonso', 50, 'ret', 'met'];

// let arr2 = arr.join();
// console.log(arr2);

// //Changing Array element
// arr[0] = 'kate';
// console.log(arr);

// //Concat 2 arrays
// let arr1 = ['jerry', 'nonso', 50, 'ret', 'met'];
// let arr3 = ['dog', 'pet', 10, 'hen'];

// let arr5 = arr1.concat(arr3);

// console.log(arr5);

// //Filter
// let arrNums = [10, 20, 30, 40, 50, 2, 4, 5, 6];

// let arrNew = arrNums.filter((item) => item > 5);

// console.log(arrNew);

// //Map

// let arrNew1 = arrNums.map((item) => item * 5);

// console.log(arrNew1);

//Reverse

// let arr1 = ['jerry', 'nonso', 50, 'ret', 'met'];

// console.log(arr1.reverse());
// console.log(arr1.sort());


//TODO List Project
//Add Todo
//Delete Todo
//Modify Todo
//View All Todo

// let todoProject = prompt('WHat do you want to do? Enter 1 to Add Todo, 0 to delete Todo..')
// let todoList = [];

// if (todoProject == 1) {
//     let addTodo = function () {
//         let addNewTodo = prompt('Enter a Todo..');
//         return todoList.push(addNewTodo);
//     }
//     addTodo();
//     alert(`Your Todos: ${todoList}`)
//     console.log(todoList);
// }else {
// let deleteTodo = function () {
//     let todo = prompt('Delete a Todo..');

//     todoList.filter(function(item) {
//         if(todoList == "") {
//             alert(`There is no Todo to delete..`)
//         }else if (todo == item) {
//             todoList.pop(item);
//         }else{
//             alert(`Todo you entered does not exist..`)
//         }
//     });
// }
// deleteTodo();
// console.log(todoList);
// };


// let todoProject = prompt('Enter 1 to Add Todo, 0 to delete Todo, 2 to modify a Todo..')
// let todoList = ['class', 'game'];

// if (todoProject == 1) {
//     let addTodo = function () {
//         let addNewTodo = prompt('Enter a Todo..');
//         todoList.push(addNewTodo);
//         return todoList;
//     }
//     addTodo();
//     alert(`Your Todos: ${todoList}`)
//     console.log(todoList);
// }else if(todoProject == 0) {
// let deleteTodo = function () {
//     let todo = prompt('Delete a Todo.. enter the position of the Item to delete');
//     if (todo == '') {
//         alert(`Cannot be empty..`)
//     }else if(todoList == '') {
//         alert(`Todo List is Empty, nothing to delete..`)
//     }else if (todo == isNaN) {
//         alert(`Enter a number from 0..`)
//     } else{
//     todoList.splice(todo, 1);
//     alert(`Deleted.. Your Todos: ${todoList}`)
//     }
//     deleteTodo();
//     console.log(todoList);
// };
// }else if(todoProject == 2) {
//     let modifyTodo = function() {
//         let todo = prompt('Enter the position of the todo to modify');
//         todoList.forEach(item => {
//             if(todo == todoList.indexOf(item)) {
//                 let newTodo = prompt('Enter new Todo..');
//                 todoList[todo] = newTodo;
//             }
//         });
//     }
//     modifyTodo()
//     alert(`Modified.. Your Todos: ${todoList}`)
//     console.log(todoList);
// }

// let bar = 'foo';
// function run() {
//     var bar = 'food';
//     console.log(bar);
// }
// // console.log(bar);
// run();

// let obj = {
//     jerry: {
//         name: "Jerry",
//         age: 20,
//         height: 6.0,
//         village: "Quaanpan",
//         state: "Plateau",
//     },

//     ret: {
//         name: "Ret",
//         age: 20,
//         height: 6.0,
//         village: "Quaanpan",
//         state: "Kaduna",  
//     }
// }

// let newArr = Object.entries(obj)

// newArr.map(elemnt => {
//     let hello = elemnt[1];
//     // console.log(elemnt);
//     console.log(hello);
//     console.log(Object.values(hello));
// })


// Movie Datatbase

// var movies = {
//     series: {
//         name: "Game of Thrones",
//         year: 2010,
//         rating: 5
//     },
//     movie: {
//         name: "The old Guard",
//         year: 2019,
//         rating: 5
//     },
//     action: {
//         name: "Survivor",
//         year: 2018,
//         rating: 5
//     }
// };


// let askUser = prompt('Enter 1 to search for a Movie..')

// if(askUser == 1) {
//     let movieSearch = function() {
//         let search = prompt('Enter a movie name, year or rating eg: Game of thrones, 2010, 5');

//         let allMovies = Object.entries(movies);
//         // console.log(allMovies)

//         allMovies.forEach(item => {
//             // console.log(item);
//             if(item[1].name.includes(search) || item[1].year == search || item[1].rating == search) {
//                 console.log(`We found movies containing '${search}' in "${item[0]}"
//                     Movie details: 
//                     Name: ${item[1].name}
//                     Year: ${item[1].year}
//                     Rating: ${item[1].rating}/10`);
//             }else{
//                 console.log(`Not found in "${item[0]}"`)
//             }
//         });
//     }
//         movieSearch();
// }
  



// var movies = [
//     {
//         name: "Game of Thrones",
//         year: 2010,
//         rating: 9,
//     },
//     {
//         name: "The old Guard",
//         year: 2019,
//         rating: 6
//     },
//     {
//         name: "The Walking Dead",
//         year: 2009,
//         rating: 9
//     },
//     {
//         name: "Suits",
//         year: 2011,
//         rating: 8
//     },
//     {
//         name: "House of Cards",
//         year: 2010,
//         rating: 9
//     },
//     {
//         name: "Frozen",
//         year: 2016,
//         rating: 7
//     }];



// let askUser = prompt('Enter 1 to search for a Movie..')

// if(askUser == 1) {
//     let movieSearch = function() {
//         let search = prompt('Enter a movie name, year or rating eg: Game of thrones, 2010, 5');
//         movies.forEach(item => {
//             // console.log(item);
//             if(item.name.toLowerCase().includes(search) || item.year == search || item.rating == search) {
//                 console.log(`We found movies containing '${search}'
//                     Movie details: 
//                     Name: ${item.name}
//                     Year: ${item.year}
//                     Rating: ${item.rating}/10`);
//             }else{
//                 console.log(`Not found...`)
//             }
//         });
//     }
//         movieSearch();             
// }


//Classes

// class Animal {
//     constructor(name, color, family) {
//         this.name = name;
//         this.color = color;
//         this.family = family;
//     }
//     hello() {
//         console.log(`Hi! I'm ${this.name} from the animal kingdom.`)
//     }
// }

// let lion = new Animal('Lion', 'Brown', 'Cat');
// let dog = new Animal('Dog', 'Black', 'Dog');
// lion.hello();

// console.log(lion, dog);

// class Lion extends Animal {
//     constructor(name, color, family, height){
//         super(name, color, family);
//         this.height = height;
//     }
// }

// let tiger = new Lion('Tiger', 'Brown', 'Cat', 4.5)

// console.log(tiger);
// tiger.hello();

// //Static methods in classes
// class Calculator {
//     static multiply(a, b) {
//         return a*b;
//     }
//     static add(a, b) {
//         return a+b;
//     }
//     static substract(a, b) {
//         return a-b;
//     }
// }

// let multiply = Calculator.multiply(2, 4);
// let add = Calculator.add(2, 4);
// let substract = Calculator.substract(2, 4);
// console.log(multiply, add, substract);

//function owner of car, date bought, plate number

class Cars{
    constructor(name, owner, model, number, color){
        this.name = name;
        this.owner = owner;
        this.model = model;
        this.number = number;
        this.color = color;
    }
}

class Gwagon extends Cars {
    constructor(name, owner, model, number, color, date) {
    super(name, owner, model, number, color)
    this.date = date;

    }
    car_details() {
        console.log(`
        ${this.name} Details
        Owner: ${this.owner} 
        Plate number: ${this.number}
        Model: ${this.model} 
        Color: ${this.name}
        Date: ${this.date}`)
    }
}

class Toyota extends Gwagon {
    constructor(name, owner, model, number, color, date, mileage) {
    super(name, owner, model, number, color, date)
    this.mileage = mileage;

    }
    car_details() {
        console.log(`
        ${this.name} Details
        Owner: ${this.owner} 
        Plate number: ${this.number}
        Model: ${this.model} 
        Color: ${this.name}
        Date: ${this.date}
        mileage: ${this.mileage}`)
    }
}

class Honda extends Toyota {
    constructor(name, owner, model, number, color, date, mileage, stick) {
    super(name, owner, model, number, color, date, mileage)
    this.stick = stick;

    }
    car_details() {
        console.log(`
        ${this.name} Details
        Owner: ${this.owner} 
        Plate number: ${this.number}
        Model: ${this.model} 
        Color: ${this.name}
        Date: ${this.date}
        mileage: ${this.date}
        stick: ${this.stick}`)
    }
}

// class Volvo extends Honda {
//     constructor(name, owner, model, number, color, date) {
//     super(name, owner, model, number, color)
//     this.date = date;

//     }
// }

// class Kia extends Volvo {
//     constructor(name, owner, model, number, color, date) {
//     super(name, owner, model, number, color)
//     this.date = date;

//     }
// }

// let gwagon = new Gwagon('Gwagon', 'Donald', 'AMG 360' , 'ABJ-3456L', 'Black', 2020)
// let toyota = new Toyota('Toyota', 'Jerry', 'Corolla' , 'ABJ-3356L', 'Red', 2020, 5000)
// let honda = new Honda('Honda', 'Nonso', 'Accord' , 'LAG-2226G', 'White', 2019, 7000, 'Manual')


// let carDetails = prompt('Enter a car name to view details eg: gwagon, toyota, honda')

// if(carDetails == 'gwagon') {
//     gwagon.car_details();
// }else if (carDetails == 'toyota') {
//     toyota.car_details();
// }else if (carDetails == 'honda') {
//     honda.car_details();
// }else{
//     console.log('Not found...')
// }
// gwagon.car_details();
// toyota.car_details();
// honda.car_details();

