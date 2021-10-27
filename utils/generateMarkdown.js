
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache'){
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'GNU'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'MIT'){
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'ISC'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache'){
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GNU'){
    return 'https://opensource.org/licenses/gpl-license'
  } else if (license === 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'ISC'){
    return 'https://opensource.org/licenses/ISC'
  } else {
    return ''
  }
}

let year = moment().format('YYYY');
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if(license === 'Apache'){
    return `
    ## License 
    Apache License Version 2.0, January 2004 
    [${license}]${renderLicenseLink(license)}`;
    
  } else if (license === 'GNU'){
    return ` 
    ## License 
    GNU License Version 2, Copyright (C) ${year} ${name}
    [${license}]${renderLicenseLink(license)}`;

  } else if (license === 'MIT'){ 
    return `
    ## License
    Released under MIT License Copyright (c) ${year} ${name}
    [${license}]${renderLicenseLink(license)}`;

  } else if (license === 'ISC'){
    return `
    ## License, Copyright (C) ${year} ${name}
    [${license}]${renderLicenseLink(license)}`;

  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
  return `
  # ${input.title}

  ${renderLicenseBadge(input.license)}${renderLicenseLink(input.license)}

  ## Description 
  ${input.description} 
  
  ## Table of Contents
  - [Description](###description) 
  - [Installation](###installation)
  - [Usage](###usage) 
  - [Contribution](###credits) 
  - [Tests](###tests) 
  - [Questions](###questions) 
  - [License](###license) 

  ## Installation
  Install Node.js. Run the following command in the terminal:
  
  ${input.installation}
  ## Usage
  ${answers.usage}
  
  ## Contribution 
  ${input.contributors}
  
  ## Tests 
  ${input.tests}
  
  ## Questions
  ${input.contactInfo}
  Email:  ${input.email}
  Github: [Github Repo](https://github.com/${input.github})
  
  
  ${renderLicenseSection(input.license)}`

;
}

module.exports = generateMarkdown;
