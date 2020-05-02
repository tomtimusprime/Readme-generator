const fs = require("fs");
const util = require("util");
const promptUser = require ("./utils/promptUser");
const generatemarkdown = require ("./utils/generatemarkdown");
const githubapi = require ("./utils/githubapi");

const init = async () => {
    //prompt user
    const data = await promptUser();
    // console.log(data);
    //get github data
    data.avatar_url = await githubapi.gitAvatar(data.githubName);
    data.email = await githubapi.gitEmail(data.githubName);
    // console.log(data);
    console.log(data.email);
    //create markdown
    const markdown = generatemarkdown(data);
    // console.log(markdown);
    //write file
    fs.writeFileSync("generatereadme.md", markdown);
}
init();

// const writeFileAsync = util.promisify(fs.writeFile);

//     .then((data) => {
//         const queryUrl = `https://api.github.com/users/${data.githubName}`;

//         const url2 = `https://api.github.com/users/${data.githubName}/events/public`;
//         let emailAddress;
        
//         axios.get(url2)
//         .then(function(response) {
//             emailAddress = response.data[0].payload.commits[0].author.email;
//             console.log(emailAddress);
//             console.log(typeof emailAddress);
//             // return {emailAddress,...data};
//             // return emailAddress;
//         });

//         axios.get(queryUrl).then(function (res) {
//            console.log(emailAddress);

//             writeFileAsync("generatedreadme.md",
// // ${emailCheck(res)}
//  ,(err) => {
//     if (err) {
//         throw err;
//     }
//         console.log("Successfully created your HTML file.");
//     })
// });  

// });

// function emailCheck(res) {
//     let emailString = "";
//     if(res.data.email === null) {
//         emailString = "Email unavailable."
//     }
//     else {
//         emailString = res.data.email;
//     }
//     return emailString;
// }