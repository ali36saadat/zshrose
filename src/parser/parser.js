import chalk from "chalk";
import commands from "../commands/commands.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const parser = function () {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        rose();
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

const rose = function () {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, "rose.txt");
    const content = fs.readFileSync(filePath, "utf-8");

    console.log(chalk.blue(content));
};

export default parser;
