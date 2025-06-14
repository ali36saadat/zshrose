import chalk from "chalk";
import commands from "../commands/commands.js";

const parser = function () {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        process.exit(1);
    }

    const flag = args[0];

    if (!commands[flag]) {
        process.exit(1);
    }

    const command = commands[flag];
    const providedArgs = args.slice(1);

    command.handler(providedArgs);
};

export default parser;
