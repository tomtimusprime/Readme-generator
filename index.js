const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

// const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const axiosAsync = util.promisify(axios.get);

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

        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        axios.get(queryUrl).then(function (res) {
            const repoNames = res.data.map(function (repo) {
                return repo.name;
            });

            const repoNamesStr = repoNames.join("\n");

            fs.writeFile("repos.txt", repoNamesStr, function (err) {
                if (err) {
                    throw err;
                }

                console.log(`Saved ${repoNames.length} repos`);
            });
        });

        writeFileAsync("Readme.txt",
            `# ${data.title}`
            , (err) => {
                if (err) {
                    throw err;
                }
                console.log("Successfully created your HTML file.");
            })
    })