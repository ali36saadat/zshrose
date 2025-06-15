import chalk from "chalk";
import fs from "fs";
import os from "os";
import path from "path";
import error from "../error-handler/error-handler.js";

const remove = function (name) {
    const zshrcPath = path.join(os.homedir(), ".zshrc");
    const aliasRegex = new RegExp(`^\\s*alias\\s+${name}\\s*=.*$`, "m");

    try {
        if (!fs.existsSync(zshrcPath)) {
            process.exit(1);
        }

        let content = fs.readFileSync(zshrcPath, "utf-8");

        if (aliasRegex.test(content)) {
            content = content
                .split("\n")
                .filter((line) => !aliasRegex.test(line))
                .join("\n");
            fs.writeFileSync(zshrcPath, content, "utf-8");
        } else {
            error("Alias Not Found");
        }
    } catch (err) {
        console.error(err.message);
    }
};

export default remove;
