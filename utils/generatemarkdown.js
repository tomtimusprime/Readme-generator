const generateMarkdown = (data) => {
    return `
# ${data.title}
[![Version](https://badge.fury.io/gh/tterb%2FHyde.svg)](https://badge.fury.io/gh/tterb%2FHyde)
    
## Table of Contents: 
1. Project description
2. Project usage
3. Licensing
4. Authors
5. Installation
6. Contributors and How to Contribute
7. Testing
8. Reporting issues
9. Questions

## Description
${data.description}


## Project Usage
${data.usage}

## Licensing
${data.licensing}


## Authors
${data.authors}


## Installation
${data.installation}


## Contribution and Contributors
No contribution is too small and all contributions are valued. 
${data.contributors}


## Tests
${data.tests}


## Reporting
${data.reporting}


## Questions
${data.questions}

![Github Avatar](${data.avatar_url})

${data.email}
`

}

module.exports = generateMarkdown;