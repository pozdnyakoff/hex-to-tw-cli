'use strict'

const yargs = require('yargs')

const { isHexColor } = require('./color')

const argv = yargs
  .usage('Usage: $0 --color <hex>')
  .example('$0 -c|--color aeaeae')
  .option('color', {
    alias: 'c',
    demandOption: true,
    type: 'string',
  })
  .check((argv) => {
    if (isHexColor(argv.color)) {
      return true
    }

    throw new Error('Invalid argument value.')
  })
  .help(false)
  .version(false).argv

module.exports = { argv }
