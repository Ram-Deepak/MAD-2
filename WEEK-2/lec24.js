// let x = {
//     first : 'Albert',
//     second : 'Pinto',
//     a : 5,
//     get full(){
//         return this.first + ' ' + this.second;
//     },

//     set full(f){
//         let parts = f.split(' ');
//         this.first = parts[0];
//         this.second = parts[1];
//     },

//     print : function() {return `Now ${this.first} and ${this.second}`},
//     add : function(x,y) {return x + y + this.a}
// };

// console.log(x.print());
// console.log(x.full);
// x.full = "Ram Deepak";
// console.log(x.print());
// console.log(x.full)
// console.log(x.add(5,5));

// let xx = {
//     a : 1,
//     inc : function(){this.a++;}
// }

// const y = {__proto__ : xx, b : 2};
// console.log(xx);
// console.log(y);
// console.log(y.a);
// y.inc();
// console.log(y.a);
// console.log(xx.a);

class Animal{
    constructor(name){
        this.name = name;
    }

    describe(){
        console.log(`${this.name} is making the sound ${this.sound}`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
        this.sound = "Woof";
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
        this.sound = "Meow";
    }

    static fromJSON(o){
        let cf = new Cat(o.name);
        return cf;
    }
}

// const a = new Animal("Jerry");
// a.describe();

// const b = new Dog("Spike");
// b.describe();

let c = new Cat("Tom");
c.describe();
console.log(c);

// considering c as a JSON object and converting it into a string
const p = JSON.stringify(c);
console.log(typeof(p));
console.log(p);

const cc = Cat.fromJSON(JSON.parse(p));
console.log(cc);
cc.describe();