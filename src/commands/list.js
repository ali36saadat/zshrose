import chalk from "chalk";
import fs from "fs";
import os from "os";
import path from "path";
import error from "../error-handler/error-handler.js";

const list = function (startsWith) {
    console.log(36);
    const zshrcPath = path.join(os.homedir(), ".zshrc");

    fs.readFile(zshrcPath, "utf8", (err, data) => {
        if (err) {
            console.error(`Error reading .zshrc: ${err}`);
            return;
        }

        let aliases = data.split("\n").filter((alias) => alias.startsWith("alias"));

        if (startsWith) {
            aliases = aliases.filter((alias) => alias.split("=")[0].split(" ")[1].startsWith(startsWith));
        }

        aliases.forEach((alias) => {
            console.log(alias);
        });
    });
};

export default list;
