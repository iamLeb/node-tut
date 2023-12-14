const { readFile, writeFile } = require('fs');

readFile('./content/file.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/file2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/writeFile.txt', `${first}, ${second}`, (err, result) => {
            console.log(err ? err : 'Done with this task!');
        })
    })
});