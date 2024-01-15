// // console.log(6 % 5);

// // const squares = [
// //   100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
// // ];

// // let dice;

// // let player1 = {
// //   name: "Joaquim",
// //   color: "red",
// //   position: 0,
// //   cash: 1000,
// // };

// // let player2 = {
// //   name: "Maxence",
// //   color: "blue",
// //   position: 0,
// //   cash: 1000,
// // };

// // let player3 = {
// //   name: "Mostafa",
// //   color: "black",
// //   position: 0,
// //   cash: 1000,
// // };

// // dice = 1 + Math.floor(6 * Math.random());
// // player1.position = (player1.position + dice) % squares.length;
// // player1.cash += squares[player1.position];
// // if (player1.cash < 0) {
// //   console.log(`Game over for ${player1.name}.`);
// // }

// // dice = 1 + Math.floor(6 * Math.random());
// // player2.position = (player2.position + dice) % squares.length;
// // player2.cash += squares[player2.position];
// // if (player2.cash < 0) {
// //   console.log(`Game over for ${player2.name}.`);
// // }

// // dice = 1 + Math.floor(6 * Math.random());
// // player3.position = (player3.position + dice) % squares.length;
// // player3.cash += squares[player3.position];
// // if (player3.cash < 0) {
// //   console.log(`Game over for ${player3.name}.`);
// // }

// // console.log(player1);
// // console.log(player2);
// // console.log(player3);

// // Example of a VERY simple Monopoly game simulation

// // let squares = [
// //   100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
// // ];

// // // --- Initialization with methods ---
// // let player1 = {
// //   name: "Joaquim",
// //   color: "red",
// //   position: 0,
// //   cash: 1000,
// //   move() {
// //     let dice = 1 + Math.floor(6 * Math.random());
// //     this.position = (this.position + dice) % squares.length;
// //     this.cash += squares[this.position];
// //     if (this.cash < 0) {
// //       console.log(`Game over for ${this.name}.`);
// //     }
// //   },
// //   displayInfo() {
// //     console.log(
// //       `${this.name} is at position ${this.position} and has ${this.cash}€`
// //     );
// //   },
// // };

// // let player2 = {
// //   name: "Maxence",
// //   color: "blue",
// //   position: 0,
// //   cash: 1000,
// //   move() {
// //     let dice = 1 + Math.floor(6 * Math.random());
// //     this.position = (this.position + dice) % squares.length;
// //     this.cash += squares[this.position];
// //     if (this.cash < 0) {
// //       console.log(`Game over for ${this.name}.`);
// //     }
// //   },
// //   displayInfo() {
// //     console.log(
// //       `${this.name} is at position ${this.position} and has ${this.cash}€`
// //     );
// //   },
// // };

// // let player3 = {
// //   name: "Mostafa",
// //   color: "black",
// //   position: 0,
// //   cash: 1000,
// //   move() {
// //     let dice = 1 + Math.floor(6 * Math.random());
// //     this.position = (this.position + dice) % squares.length;
// //     this.cash += squares[this.position];
// //     if (this.cash < 0) {
// //       console.log(`Game over for ${this.name}.`);
// //     }
// //   },
// //   displayInfo() {
// //     console.log(
// //       `${this.name} is at position ${this.position} and has ${this.cash}€`
// //     );
// //   },
// // };

// // // --- Turn 1  ---
// // player1.move();
// // player2.move();
// // player3.move();

// // // --- Turn 2  ---
// // player1.move();
// // player2.move();
// // player3.move();

// // // --- Display info  ---
// // player1.displayInfo();
// // player2.displayInfo();
// // player3.displayInfo();

// // // function sum (1,2) {}
// // // const sum = function (1,2) {}

// let squares = [
//   100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
// ];

// class Player {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//     this.position = 0;
//     this.cash = 1000;
//   }
//   move() {
//     let dice = 1 + Math.floor(6 * Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game is over for player ${this.name}`);
//     }
//   }

//   displayInfo() {
//     console.log(
//       `${this.name} is at position ${this.position} and has ${this.cash}€`
//     );
//   }
// }

// function printOmar() {
//   console.log("Omar");
// }

// function printVlad() {
//   console.log("Vlad");
// }

// function printName(username) {
//   console.log(username);
// }

// // --- Initialization of players ---
// let player1 = new Player("Joaquim", "red");
// let player2 = new Player("Maxence", "blue");
// let player3 = new Player("Mostafa", "black");

// // --- Turn 1  ---
// player1.move();
// player2.move();
// player3.move();

// // --- Turn 2  ---
// player1.move();
// player2.move();
// player3.move();

// player1.displayInfo();
// player2.displayInfo();
// player3.displayInfo();
// // const users = [
// //   { name: "omar", color: "green" },
// //   { name: "sarah", color: "red" },
// // ];

// // const newPLayers = [];

// // users.forEach((user) => {
// //   newPLayers.push(new Player(user.name, user.color));
// // });

// // const player1 = new Player("Omar", "red");
// // const player2 = new Player("Vlad", "blue");
// // const player3 = new Player("Joy", "yellow");

// class Animal {
//   constructor(name, mainColor, sound) {
//     this.name = name;
//     this.mainColor = mainColor;
//     this.sound = sound;
//   }
//   scream(intensity) {
//     console.log(`${this.sound} ${"!".repeat(intensity)}`);
//   }
// }

// class Cat extends Animal {
//   constructor(name, mainColor, sound, nbOfLegs) {
//     super(name, mainColor, sound);
//     this.nbOfLegs = nbOfLegs;
//   }
// }

// const garfield = new Cat("Garfield", "orange", "Meow", 4);
// class Chameleon extends Animal {
//   constructor(name) {
//     super(name, "green", "...");
//   }
//   changeColor(newColor) {
//     this.mainColor = newColor;
//   }
// }

// const pascal = new Chameleon("Pascal");
// pascal.scream(5);
// console.log(pascal);
// pascal.changeColor("red");
// console.log(pascal);
