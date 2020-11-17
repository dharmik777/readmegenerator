// function to generate markdown for README
function generateMarkdown(data) {
  return `#TITLE ${data.title}
  table of contents:

  ##Description:
  ...  
  ${data.description}
  
  ## Installation:
  ...  
  ${data.install}

  ## Usage:
  ...  
  ${data.usage}
  
  ## Contributing:
  ...  
  ${data.contribution}

  ## Tests:
  ...  
  ${data.test}

  ## License:
  ...  
  ${data.choices}

  ##Questions:
  ...  
  Github: https://github.com/${data.github}/

  ...  
  If you need any assistance you can contact me using my Github link or at ${data.email}`

    ;
}

module.exports = generateMarkdown


