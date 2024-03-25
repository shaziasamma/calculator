#! /usr/bin/env node
import inquirer from "inquirer";

const answers = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "selesct one of operator to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);
  //conditional statement
  if (answers.operator === "ADDITION"){
    console.log(answers.firstNumber + answers.secondNumber);
  }else if(answers.operator === "SUBTRACTION"){
    console.log(answers.firstNumber - answers.secondNumber);
  }else if(answers.operator === "MULTIPLICTION"){
    console.log(answers.firstNumber * answers.secondNumber);
  }else if(answers.operator === "DIVISION"){
    console.log(answers.firstNumber / answers.secondNumber);
}
 else("please select correct operator")

 
