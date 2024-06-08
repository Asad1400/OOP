import inquirer from "inquirer";

class Person {
    private _personality: string;
    constructor() {
        this._personality = "Mystery";
    }
    askQuestions(answer: number):void {
        if (answer === 1) 
            this._personality = "Introvert";
        else if (answer === 2) 
            this._personality = "Extrovert";
        else
            this._personality = "Mystery";
    }
    
    get personality() {
        return this._personality;
    }
}

class Student {
    private _name: string;
    constructor() {
        this._name = "";
    }
    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
}

let input = await inquirer.prompt([
    {
        name: "answer",
        type: "list",
        message: "Are you an introvert or an extrovert?",
        choices: ["Introvert", "Extrovert"]
    },
    {
        name: "studentName",
        type: "input",
        message: "Student Name: "
    }
]);
let person = new Person();
let student = new Student();
person.askQuestions(input.answer === "Introvert" ? 1 : 2);
student.name = input.studentName;

console.log(`Your name is ${student.name} and your personality type is ${person.personality}.`);
