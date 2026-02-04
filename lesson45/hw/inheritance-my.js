function Dog(name) {
    this.name = name;
}

// Dog.prototype.bark doesn't work
Dog.prototype.bark = function () {
    return "I'm " +this.name +',woof';
};


const DogProto = {
    fromProto: "FromProto"
}

Dog.__proto__ = DogProto;
console.log(Dog.__proto__);
console.log(Dog.__proto__.fromProto);

const d = new Dog('Rex');
console.log("d.__proto__", d.__proto__);
console.log(d.bark()); // Output: woof