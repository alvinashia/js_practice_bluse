
class Car{
    constructor(name,year,color){
        this.name = name;
        this.year = year;
        this.color = color
    }
    hello=()=>{
        console.log('hello',this.name,this.year,this.color);
    }
}


const myCar1 = new Car('Ford',2014,'blue')
myCar1.hello()

const myCar2 = {name:'toyota',year:'2022'}
myCar2.hello = myCar1.hello
myCar2.hello()
