process.stdout.write('Welcome to Holberton School, what is your name?\n')

if (process.stdin.isTTY) {
    process.stdin.on('data', (data) => {
        var name = data.toString().trim();
        process.stdout.write(`Your name is: ${name}\n`);
        process.stdout.write('This important software is now closing\n');
        process.exit();
    });

} else {
    process.stdin.on('data', (data) => {
        var name = data.toString().trim();
        process.stdout.write(`Your name is: ${name}\n`);
        process.exit();
    });

    process.on('exit', () => {
        process.stdout.write('This important software is now closing\n');
    })
}
