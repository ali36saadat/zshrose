import chalk from "chalk";
import error from "../error-handler/error-handler.js";
import ioHandler from "../scripts/ioHandler.js";

const edit = function (name, command) {
    const IO = new ioHandler();
    const zshFile = IO.read();

    const newAlias = `alias ${name}="${command}"`;
    const aliasRegex = new RegExp(`^\\s*alias\\s+${name}\\s*=.*$`, "m");

    if (aliasRegex.test(zshFile)) {
        const newZshFile = zshFile.replace(aliasRegex, newAlias);
        IO.write(newZshFile);
        console.log(chalk.bold.cyanBright("Alias Edited"));
    } else {
        error("err003");
    }
};

export default edit;
