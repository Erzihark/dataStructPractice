/*function createPerson(name){
    const obj = {};
    obj.name = name;
    obj.greeting = function(){
        console.log('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
}
const salva = createPerson('Salva');
salva.name;
salva.greeting();*/   //This the dumb way to do (without constructors)

function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function(){
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age 
        + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1]
         + '.');
    };
    this.greeting = function(){
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
}

let person1 = new Person('Manuel', 'Sanchez', 24, 'male', ['gaming', 'tennis']);
// person1.bio();
// person1.greeting();

/*function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}*/

class Shape{
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
}

Shape.prototype.calcPerimeter = function(){
    console.log("This " + this.name + "\'s perimeter is " + (this.sides * this.sideLength))
}

let shape = new Shape("Square", 4, 6);
shape.calcPerimeter();

