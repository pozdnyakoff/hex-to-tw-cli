'use strict'

const clipboardy = require('clipboardy')

const { argv } = require('./cli')
const hexToTailwind = require('./hex-to-tailwind')

let hex = argv.color
const tailwind = hexToTailwind(hex)

clipboardy.writeSync(tailwind)

hex = !hex[0].startsWith('#') ? `#${hex}` : hex

console.info(`${hex} → ${tailwind}\n\nCopied.`)
