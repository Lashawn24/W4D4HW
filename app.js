// let dog = {
// name: 'sif',   
// numLeg: 4
// };

// console.log(dog.name);


// let dog = {
// name: 'sif', 
// numLeg: 4,
// sayLegs: function() {return 'this dog has 4 legs';}
// };

// dog.sayLegs();


// let dog = {
// name: 'sif', 
// numLeg: 4,
// sayLegs: function() {return 'this dog has ' +this.numLeg+ ' legs';}
// };

// dog.sayLegs();

// function Dog(){
//     this.name = "buddy";
//     this.color = "grey";
//     this.numLegs = 4;
// }


// function Dog(){
//     this.name = "buddy";
//     this.color = "grey";
//     this.numLegs = 4;
// }
// let hound = new Dog();

// function Dog(name, color){
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4
// }

// let wolf = new Dog("sif", "grey")


// function house(numBedrooms){
//     this.numBedrooms = numBedrooms;
// }
// let myHouse = new house(800);
// myHouse instanceof house;

// function Bird(name){
// this.name = name;
// this.numLegs = 2;
// }

// let canery = new Bird('tweety');
// let ownProps = [];
// for(let property in canery){
//     if (canery.hasOwnProperty(property))
//     ownProps.push(property)
// }
// console.log(ownProps)


// function Dog(name){
//     this.name = name
// }

// Dog.prototype.numLegs = 4;

// let wolf = new Dog("Sif")



// function Dog(name){
//     this.name = name
// }

// Dog.prototype.numLegs = 4;

// let wolf = new Dog("Sif")

// let ownProps = [];
// let prototypeProps = [];

// for(let property in wolf){
//     if(wolf.hasOwnProperty(property)){
//         ownProps.push(property);
//     }else{
//         prototypeProps.push(property);
//     }
// }

// function Dog(name){
//     this.name = name;

// }

// function joinDogFraturninty(canidate){
//     if (canidate.construtor === Dog){
//         return true;
//     }else{
//        return false;
//     }

// }

// function Dog(name){
//     this.name = name;
// }
// Dog.prototype = {
//     numLegs: 4,
//     eat: function(){
//         console.log("nom nom nom");
//     },
//     describe: function(){
//         console.log('my name is ' + this.name);
//     }
// };

// function Dog(name){
//     this.name = name;

// }
// let beagle = new Dog("Snoopy");
// Dog.prototype.isPrototypeOf(beagle);


// function Dog(name){
//     this.name = name;

// }
// let beagle = new Dog("Snoopy");
// Dog.prototype.isPrototypeOf(beagle);

// Object.prototype.isPrototypeOf(Dog.prototype)

// function Cat(name) {
//     this.name = name;
//   }

//   Cat.prototype = {
//     constructor: Cat,
//     eat: function() {
//       console.log("nom nom nom");
//     }
//   };

//   function Bear(name) {
//     this.name = name;
//   }

//   Bear.prototype = {
//     constructor: Bear,

//   };

//   function Animal() { 
//   }

//   Animal.prototype = {
//     constructor: Animal,
//     eat: function() {
//         console.log("nom nom nom")
//     }
//   };

function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// // Only change code below this line

// let beagle= Object.create(Animal.prototype);; // Change this line
// let duck = Object.create(Animal.prototype); // Change this line

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Dog() { }

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype);

// let beagle = new Dog();


// function Animal() {}
// function Dog() {}
// function Bird() {}

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let wolf = new Dog();


// function Animal() {}
// Animal.prototype.eat = function() {
//     console.log("nom nom");
// }

// function Dog(){};
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function(){
//     console.log("woof");
// }
// let wolf = new Dog();

// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line

// Penguin.prototype.fly = function(){
//     return "thee can not fly"
// }

// // Only change code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());

// let bird ={
//     name:  "don",
//     numLegs: 2
// };

// let boat = {
//     name: "blade",
//     type: "raceboat"
// };

// let glideMixin = function(obj){
//     obj.glide = function(){
//         console.log("glide");
//     }
// };

// glideMixin(bird);
// glideMixin(boat);

// function Bird(){
//     let weight = 15;
//     this.getWeightCount =function(){
//         return weight;
//     };
// }
// let duck = new Bird();
// duck.getWeightCount();


// (function (){
//     console.log("a cozy nest");
// })();

let funModule = (function () {
    return {


         isCuteMixin = function (obj) {
            obj.isCute = function () {
                return true;
            };
             singMixin = function (obj) {
                obj.sing = function () {
                    console.log("Singing to an awesome tune");
                };
            };
        };
    };