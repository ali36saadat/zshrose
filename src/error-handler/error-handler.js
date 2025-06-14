import chalk from "chalk";
import fs from "fs";

const error = function (msg) {
    const filePath = `${process.cwd()}/src/error-handler/error-list.json`;

    const data = fs.readFileSync(filePath, "utf-8");
    const list = JSON.parse(data);

    if (list[msg]) {
        console.log(chalk.red.bold(list[msg]));
    } else {
        console.log(chalk.rgb(255, 0, 0).bold("ERROR HANDLER"), chalk.rgb(255, 0, 0)("Not Found Error"));
    }
};

export default error;
