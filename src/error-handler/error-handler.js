import chalk from "chalk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const error = function (msg) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, "error-list.json");

    const data = fs.readFileSync(filePath, "utf-8");
    const list = JSON.parse(data);

    if (list[msg]) {
        console.log(chalk.red.bold(list[msg]));
    } else {
        console.log(chalk.rgb(255, 0, 0).bold("ERROR HANDLER"), chalk.rgb(255, 0, 0)("Not Found Error"));
    }
};

export default error;
