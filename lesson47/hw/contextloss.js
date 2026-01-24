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

const fn=peter.infoFunc;
console.log(fn);
fn();
func(peter.infoArrow);//Peter
func(peter.infoFunc);//ERROR



