import chalk from "chalk";
import ioHandler from "../scripts/ioHandler.js";

const list = function (startsWith) {
    const IO = new ioHandler();
    const zshFile = IO.read();

    let aliases = zshFile.split("\n").filter((alias) => alias.startsWith("alias"));

    if (startsWith) {
        aliases = aliases.filter((alias) => alias.split("=")[0].split(" ")[1].startsWith(startsWith));
    }

    console.log(chalk.bold.magentaBright(" Alias List "));
    aliases.forEach((alias, index) => {
        const regex = /^alias\s+(\w+)=["'](.+?)["']$/;
        const match = alias.match(regex);

        if (match) {
            const name = match[1];
            const value = match[2];
            console.log(chalk.white(`${index + 1}-`), chalk.bold(name), ":", chalk.yellow(value));
        }
    });
};

export default list;
