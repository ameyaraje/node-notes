const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    decribe: 'Add a new note',
    builder: {
        title: {
            describe: 'A title for your note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'The body for your note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(chalk.green('Title: ', argv.title, ' Body: ', argv.body));
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

yargs.parse()