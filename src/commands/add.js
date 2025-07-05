import chalk from "chalk";
import ioHandler from "../scripts/ioHandler.js";

const add = function (name, command) {
    const IO = new ioHandler();
    const newAlias = `\n alias ${name} = "${command}"`;
    IO.append(newAlias);

    console.log(chalk.bold.greenBright("Alias Added"));
};

export default add;
