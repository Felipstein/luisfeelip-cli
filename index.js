#!/usr/bin/env node

const yargs = require('yargs');
const boxen = require('boxen');
const { hideBin } = require('yargs/helpers');
const messages = require('./messages');

const argv = yargs(hideBin(process.argv)).option('pt-br', { alias: 'br', type: 'boolean', description: 'Show in PT-BR' }).argv;

const message = argv['pt-br'] ? messages.ptBr : messages.en;

const boxedMessage = boxen(message, {
  padding: {
    left: 1,
    right: 1,
  },
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green',
})

console.log(boxedMessage);
