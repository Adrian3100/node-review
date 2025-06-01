// app.js
import inquirer from "inquirer";
import { greeting, reverseString } from "./utils.js";

console.log(greeting("Developer"));

const main = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter a string to reverse:",
    },
  ]);

  const reversed = reverseString(answer.text);
  console.log(`Reversed: ${reversed}`);
};

main();
