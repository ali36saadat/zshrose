import cli from "../commands/commands.js";
import error from "../error-handler/error-handler.js";

const parser = function () {
    try {
        const args = process.argv.slice(2);

        let flag = commands[args[0]];

        if (!args.length) {
            flag = "about";
        }

        const commandModule = cli[flag];
        const providedArgs = args.slice(1);

        commandModule.handler(providedArgs);
    } catch (err) {
        error(err);
    }
};

const commands = {
    "--about": "about",
    "-a": "add",
    "--add": "add",
    "-e": "edit",
    "--edit": "edit",
    "-r": "remove",
    "--remove": "remove",
    "-l": "list",
    "--list": "list",
};

export default parser;
