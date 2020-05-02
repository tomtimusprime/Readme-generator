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
            writeFileAsync("generatedreadme.md",
`# ${data.title}
[![Version](https://badge.fury.io/gh/tterb%2FHyde.svg)](https://badge.fury.io/gh/tterb%2FHyde)
![Github Avatar](${res.data.avatar_url})

### Table of Contents: 
1. Project description
2. Project usage
3. Licensing
4. Authors
5. Installation
6. Contributors and How to Contribute
7. Testing
8. Questions
9. Reporting issues

====================
### Description
${data.description}

====================
### Project Usage
${data.usage}

====================
### Licensing
${data.licensing}

====================
### Authors
${data.authors}

====================
### Installation
${data.installation}

=================================
### Contribution and Contributors
No contribution is too small and all contributions are valued. 
${data.contributors}

=============
### Tests
${data.tests}

==============
### Question
${data.questions}

==============
### Reporting
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