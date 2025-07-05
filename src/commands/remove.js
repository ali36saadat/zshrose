import chalk from "chalk";
import error from "../error-handler/error-handler.js";
import ioHandler from "../scripts/ioHandler.js";

const remove = function (name) {
    const IO = new ioHandler();
    const zshFile = IO.read();

    const aliasRegex = new RegExp(`^\\s*alias\\s+${name}\\s*=.*$`, "m");

    if (aliasRegex.test(zshFile)) {
        const newZshFile = zshFile
            .split("\n")
            .filter((line) => !aliasRegex.test(line))
            .join("\n");

        IO.write(newZshFile);
        console.log(chalk.bold.redBright("Alias Removed"));
    } else {
        error("err003");
    }
};

export default remove;
