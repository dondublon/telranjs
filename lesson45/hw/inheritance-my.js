function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function () {
    return 'woof';
};

const d = new Dog('Rex');
console.log(d.bark()); // Output: woof