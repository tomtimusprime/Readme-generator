const axios = require("axios");

const queryUrl = (githubName) => `https://api.github.com/users/${githubName}`;

const githubAPI = {
    gitAvatar: async function(githubName) {
        const url = queryUrl(githubName);
        const {data: {avatar_url, email}} = await axios.get(url);
        return avatar_url;
        // email : email !== null ? email : "Email not provided."
    },
    gitEmail: async function(githubName) {
        const url = `https://api.github.com/users/${githubName}/events/public`;
        const res = await axios.get(url);
        return res.data[0].payload.commits[0].author.email;
    }
};

module.exports = githubAPI;