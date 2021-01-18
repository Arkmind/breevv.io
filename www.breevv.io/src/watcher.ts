import Watch from 'watchpack'

const wp = new Watch({});

wp.watch(['/../tailwind.config.js'], [])

wp.on('change', (filePath, mtime, explanation) => {
    console.log(filePath, mtime, explanation);
})