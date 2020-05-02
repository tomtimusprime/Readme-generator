const inquirer = require("inquirer");
let questions = [
    {
        type: "input",
        message: "What's your Github username?",
        name: "githubName"
    }
    // {
    //     type: "input",
    //     message: "Project Title?",
    //     name: "title"
    // },
    // {
    //     type: "input",
    //     message: "Enter a project description.",
    //     name: "description"
    // },
    // {
    //     type: "input",
    //     message: "How will you install your program?",
    //     name: "installation"
    // },
    // {
    //     type: "input",
    //     message: "How are you going to use this project?",
    //     name: "usage"
    // },
    // {
    //     type: "checkbox",
    //     message: "What type of licensing are you using for this project?",
    //     name: "licensing",
    //     choices: [
    //         "None",
    //         "MIT",
    //         "APACHE_2.0",
    //         "GPL_3.0",
    //         "BSD3",
    //         "Other"
    //     ]
    // },
    // {
    //     type: "input",
    //     message: "Authors?",
    //     name: "authors"
    // },
    // {
    //     type: "input",
    //     message: "How can others contribute?",
    //     name: "contributors"
    // },
    // {
    //     type: "input",
    //     message: "Tests?",
    //     name: "tests"
    // },
    // {
    //     type: "input",
    //     message: "Questions?",
    //     name: "questions"
    // },
    // {
    //     type: "input",
    //     message: "Where should the user report issues?",
    //     name: "reporting"
    // }
]
const promptUser = () => {
    return inquirer.prompt(questions);
}

module.exports = promptUser;