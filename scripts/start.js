const webpack = require('webpack')
const fs = require('fs-extra')
const config = require('../webpack.dev.js')

const compiler = webpack(config)

console.log('Removing /assets/build')
fs.removeSync('../assets/build')

compiler.watch({}, (err, stats) => {
  if (err) {
    console.error(err)
  } else {
    console.log(
      '✨ Compiled successfully in ',
      stats.endTime - stats.startTime,
      ' ms'
    )
  }
})
