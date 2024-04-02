const chalk = require('chalk');
const terminalLink = require('terminal-link');
const contacts = require('../contacts');

module.exports = `
  Olá! 👋

  ${chalk.rgb(169, 169, 169)("Me chamo")} ${chalk.white('Felipe Oliveira')},
    ${chalk.rgb(169, 169, 169)("um Desenvolvedor Full-Stack & Mobile 🚀")}
  
  ${chalk.white.bold('💻 ReactJS, React Native & NodeJS')}

  ${chalk.strikethrough.green('-----------------------------------------------')}

  🔗 ${terminalLink(chalk.rgb(0, 255, 247)('Meu portfólio'), contacts.portfolio)}

  🔗 ${terminalLink(chalk.rgb(0, 191, 255)('LinkedIn'), contacts.linkedIn)}
  🔗 ${terminalLink(chalk.gray('GitHub'), contacts.github)}

  ${chalk.green(contacts.phone)}
  ${chalk.yellow(contacts.email)}
`