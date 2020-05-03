const fs = require("fs");
const promptUser = require ("./utils/promptUser");
const generatemarkdown = require("./utils/generatemarkdown.js");
const githubapi = require ("./utils/githubapi");

const init = async () => {
    //prompt user
    const data = await promptUser();
    //get github data
    data.avatar_url = await githubapi.gitAvatar(data.githubName);
    data.email = await githubapi.gitEmail(data.githubName);
    console.log(data.email);
    //create markdown
    const markdown = generatemarkdown(data);
    //write file
    fs.writeFileSync("generatedreadme.md", markdown);
}
init();

