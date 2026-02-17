function Lesson_06() {

    //1 tip dannich - String
let userFullName: string= "John Johnson";

//userFullName = 30;//budet oshibka

let hello = `Hello, ${userFullName}`;//tip naznachaetsya avtomaticheski v zavisimosti ot togo, cho pervim peredali v peremennuyu
//hello = 300;//budet oshibka
console.log(hello);
/////////////////////////////////////////////////
//2 tip - number
let number1: number = 100;

let number2: number = 39.5;

console.log(number1);
console.log(number2);

//number1 = "Hello";//budet oshibka
////////////////////////////////////////////////////
//3 tip - boolean
let isAdmin: boolean = true;
isAdmin= false;
console.log(isAdmin);
//////////////////////////////////////////////////
//4 tip - massiv
const animals: string[] = ["Tiger", "Lion", "Elephant"];
console.log(animals)
// animals.push(30);//budet oshibka

const numbers: number[] = [1,2,3,4,5];
console.log(numbers)
//////////////////////////////////////////////////
//5 tip - tupel

const userArray: [
    string, 
    string, 
    string,
    number, 
    string, 
    string, 
    string,
    number] = ["name", "John", "age", 30, "name", "Pavel", "age", 40];
console.log(userArray);
//userArray[0]=true;//budet oshibka

////////////////////////////////////////////////
//6 functions
//vipolnyaet, no nichego ne vozvraschaet
const sayHi = (personName: string): void =>{
    console.log(`Hello , ${personName}`)
};
sayHi("John");
//vozvraschaet summu 2-ch chisel
const add = (a: number,b: number): number=>{
    return a +b;
};

add(10, 5);//vernoe ispolzovanie funktii
//add(3, "qwe");//budet oshibka

/////////////////////////////////////////////////////
//7. any
let anyVariable: any = "Hello";

anyVariable = 300;
anyVariable = true;

///////////////////////////////////////////////////////
//8. null undefined

let userName: null | undefined
//userName = "qwe";// budet oshibka

/////////////////////////////////////////////////////
//9. object

interface Admin {
    isAdmin: boolean;
}

interface User extends Admin {
    fullName: string;
    age: number;
    job: string;
    pet ?: string;
}
//mozno dopisat sv-va v interface
interface User {
    isFamily: boolean;
}
const user1: User = {
    fullName: "John Johnson",
    age: 30, 
    job: "QA",
    pet: "Max",
    isAdmin: true,
    isFamily: true,
}

const user2: User ={
    fullName: "Brad Pitt",
    age: 30,
    job:"FrontEnd",
    isAdmin: true,
    isFamily:true,
}

//////////////////////////////////////////////////
//10 type
type GlobalAnimalProps = {
    isAnimal: boolean;
}

type Animal ={
    type:string,
    age: number,
    color: string,
    isWiled: boolean,
}

const animals2: GlobalAnimalProps | Animal = {
    isAnimal: true,
    type: "Tiger",
    age: 12, 
    color: "orange",
    isWiled: true
};

//type pozvolyaet sozdat sobstven. tip ili kombinacii tipov
type UserDataFromServer = null | undefined | User;

let userData: UserDataFromServer = undefined;
userData = null;
userData = user1;


  return <div>Lesson_06</div>;
}
export default Lesson_06;