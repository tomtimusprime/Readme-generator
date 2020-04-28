const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

// const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// readFileAsync("animals.json", "utf8").then(function(data) {

//   });

  inquirer
    .prompt([
        {
            type: "input",
            message: "Enter your full name",
            name: "fullName"
        },
        {
            type: "input",
            message: "Where do you currently live?",
            name: "location"
        },
        {
            type: "input",
            message: "What's your Linkedin URL?",
            name: "linkedin"
        },
        {
            type: "input",
            message: "Enter your Github Username",
            name: "github"
        },
        {
            type: "input",
            message: "Write a quick Bio.",
            name: "bio"
        }
    ])
    .then((data) => {
        
        writeFileAsync("Readme.txt", 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Full Name:${data.fullName} </h1>
            <h1>Full Current Location: ${data.location}</h1>
            <h1>Full LinkedIn profile: ${data.linkedin} </h1>
            <h1>Full Github Link: ${data.github} </h1>
            <p>Bio: ${data.bio}</p>
        </body>
        </html>`
        , (err) => {
            if(err) {
                throw err;
            }
            console.log("Successfully created your HTML file.");
        })
    })