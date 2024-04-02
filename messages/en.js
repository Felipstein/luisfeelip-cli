const chalk = require('chalk');
const terminalLink = require('terminal-link');
const contacts = require('../contacts');

module.exports = `
  Hello! 👋

  ${chalk.rgb(169, 169, 169)("I'm")} ${chalk.white('Felipe Oliveira')},
    ${chalk.rgb(169, 169, 169)("a Full-Stack & Mobile Engineer 🚀")}
  
  ${chalk.white.bold('💻 ReactJS, React Native & NodeJS')}

  ${chalk.strikethrough.green('-----------------------------------------------')}

  🔗 ${terminalLink(chalk.rgb(0, 255, 247)('My portfolio'), contacts.portfolio)}

  🔗 ${terminalLink(chalk.rgb(0, 191, 255)('LinkedIn'), contacts.linkedIn)}
  🔗 ${terminalLink(chalk.gray('GitHub'), contacts.github)}

  ${chalk.green(contacts.phone)}
  ${chalk.yellow(contacts.email)}


  ${chalk.gray.italic('Use the --pt-br (or --br) flag for Portuguese.')}
`