const fs = require('fs')
const { exec } = require('child_process')

fs.watchFile('./tailwind.config.js', (curr, prev) => {
    const child = exec('yarn build:tailwind', (err) => console.log(err)) 

    child.stdout.pipe(process.stdout);
})