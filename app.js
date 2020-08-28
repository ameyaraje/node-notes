const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    decribe: 'Add a new note',
    handler: function () {
        console.log(chalk.green('Adding a new note'));
    }
});

yargs.command({
    command: 'remove',
    decribe: 'Remove an existing note',
    handler: function () {
        console.log(chalk.red('Removing selected note'));
    }
});

yargs.command({
    command: 'list',
    decribe: 'List all notes',
    handler: function () {
        console.log(chalk.green('Listing all notes'));
    }
});

yargs.command({
    command: 'view',
    decribe: 'View selected note',
    handler: function () {
        console.log(chalk.blue('Viewing selected note'));
    }
});

console.log(yargs.argv);