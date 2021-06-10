
class Pet{
    constructor(name,age){
        console.log("pet constructor");
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
}


class Cat extends Pet{
    constructor(name, age,liveLeft =9){
        console.log("cat constructor");
   
        super(name,age)
        this.liveLeft=liveLeft;
    }
    meow(){
        return "meoww"
    }

}


class Dog extends Pet{
    bark(){
        return `woof`
    }
    eat(){
        return `${this.name} scarfs his food`
    }
}

