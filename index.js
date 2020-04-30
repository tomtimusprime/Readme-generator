const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

// const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([
        {
            type: "input",
            message: "What's your Github username?",
            name: "githubName"
        },
        {
            type: "input",
            message: "Project Title?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a project description.",
            name: "description"
        },
        {
            type: "input",
            message: "How will you install your program?",
            name: "installation"
        },
        {
            type: "input",
            message: "How are you going to use this project?",
            name: "usage"
        },
        {
            type: "checkbox",
            message: "What type of licensing are you using for this project?",
            name: "licensing",
            choices: [
                "None",
                "MIT",
                "APACHE_2.0",
                "GPL_3.0",
                "BSD3",
                "Other"
            ]
        },
        {
            type: "input",
            message: "Authors?",
            name: "authors"
        },
        {
            type: "input",
            message: "How can others contribute?",
            name: "contributors"
        },
        {
            type: "input",
            message: "Tests?",
            name: "tests"
        },
        {
            type: "input",
            message: "Questions?",
            name: "questions"
        },
        {
            type: "input",
            message: "Where should the user report issues?",
            name: "reporting"
        }
    ])
    .then((data) => {

        const queryUrl = `https://api.github.com/users/${data.githubName}`;
        let gitHubImageAndEmail = [];
        axios.get(queryUrl).then(function (res) {
            console.log(res);
            console.log(`this is the image url ${res.data.avatar_url}`);
            console.log(`this is the bio info ${res.data.bio}`);
            console.log(`this is the  ${res.data.name}`);
            console.log(`this is the email ${res.data.email}`);
            writeFileAsync("Readme.md",
            `# ${data.title}
            ${res.data.avatar_url}
            ${data.description}
            ${data.installation}
            ${data.usage}
            ${data.licensing}
            ${data.authors}
            ${data.contributors}
            ${data.tests}
            ${data.questions}
            ${data.reporting}`
            
            
            , (err) => {
                if (err) {
                    throw err;
                }
                console.log("Successfully created your HTML file.");
            })
            gitHubImageAndEmail = [res.avatar_url, res.email];
            console.log(res.avatar_url);
                // ![password generator demo](./Assets/03-javascript-homework-demo.png)
            });
          

        });