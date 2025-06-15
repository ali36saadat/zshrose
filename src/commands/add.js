import chalk from "chalk";
import fs from "fs";
import os from "os";
import path from "path";

const add = function (name, command) {
    const zshrcPath = path.join(os.homedir(), ".zshrc");

    const blockToAppend = `\n alias ${name} = "${command}"`;
    console.log(zshrcPath);

    try {
        if (!fs.existsSync(zshrcPath)) {
            process.exit(1);
        }

        fs.appendFileSync(zshrcPath, blockToAppend, "utf-8");
        console.log("Added");
    } catch (err) {
        console.error(err.message);
    }
};

export default add;
