class Person {
    constructor(name,age,hobbies){
        this.name = name
        this.age = age
        this.hobbies = hobbies
    }

    getPerson = ()=>{
        return `${this.name}\n ${this.age}\n ${this.hobbies}`
    }
}
let firstPerson = new Person("monday",99,"Programming");
console.log(firstPerson.getPerson())