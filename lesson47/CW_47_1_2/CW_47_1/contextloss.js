class User{
    constructor(nickName){
        this.nickName=nickName;
    }

    infoFunc = function(){
        console.log(`Nickname: ${this.nickName}`);        
    }

    infoArrow = ()=>{
        console.log(`Nickname: ${this.nickName}`);        
    }

    greeting = function(prefix,postfix){
        console.log(`${prefix} ${this.nickName} ${postfix}`);
        
    }
}

const peter = new User("Peter");
console.log("===Func===");
peter.infoFunc(); //peter
console.log("===Arrow===");
peter.infoArrow(); //peter
console.log("===Context Loss");
// const fn=peter.infoFunc;
// console.log(fn);
// fn();
// func(peter.infoArrow);//Peter
//func(peter.infoFunc);//ERROR

const fn= peter.infoFunc.bind(peter);
fn(); //Peter
func(peter.infoFunc.bind({nickName:"John"}));
fn();
console.log('==== call, apply===');
peter.infoFunc.call({nickName:"Mary"});
peter.infoFunc.apply({nickName:"Mary"});
const person = new User("Vasya Ivanov");
person.greeting('Mr.',"esquire");
peter.greeting('Mr.',"esquire");
peter.greeting.call(person,'Sir',"!!!!");
peter.greeting.apply(person,[">>>", "<<<<"]);



function func(callback){
    console.log(callback);
    callback();
}


