
const greeting: string = "asd";
let courseName: string = "cgn-java-23-4";
courseName = " toller Kurs cgn-java-23-4";

const a: number = 1;
const b: string = "bla";
const c: {} = {};
const d: number[] = [1,2,3];
const e: null = null;
const f: undefined = undefined;
const g: boolean = true;

let x: number;

x = 1;

const myObj = {
    "name": "Daniel",
    "alter": 39
}

const myArr: number[] = [
    3,6,4,2
]


if (null) {
    console.log("Fall IF");
} else {
    console.log("Fall ELSE")
}

// zu "true" werden alle Werte
// ausnahmen (zu "false" werden): false, 0, "", null, undefined, NaN


for (let i = 0; i < 5; i++) {
    console.log(i)
}



let age: number | string = "alt";

const ages: (number | string | boolean[] | {})[] = [1,2,3,"old",[true,false,true], {}]

const alexandra: {name: string, age: string} = {
    name: "Alexandra",
    age: "abc"
}

let person: {name: string} = {name: "Daniel"}
person = alexandra
console.log(person)
