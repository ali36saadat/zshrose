import chalk from "chalk";

const error = function (msg) {
    if (errorList[msg]) {
        console.log(chalk.bgRed.bold(" ERROR "), chalk.redBright.bold(errorList[msg]));
    } else if (msg.message) {
        console.log(chalk.bgRed.bold(" ERROR "), chalk.redBright.bold(msg.message));
    } else {
        const OSC = "\u001B]8;;";
        const ST = "\u001B\\";
        const link = "https://github.com/ali36saadat/zshrose";
        const label = "Help Us By Reporting This Issue";

        console.log(chalk.bgRed.bold(" ERROR "), chalk.redBright.bold("Error Not Found"));
        console.log(chalk.bold.greenBright(`${OSC}${link}${ST}${label}${OSC}${ST}`));
    }
};

const errorList = {
    err001: "Add Command Requires 2 Parameters",
    err002: "Command Not Found",
    err003: "Alias Not Found",
};

export default error;
