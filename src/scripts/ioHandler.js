import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

class ioHandler {
    constructor() {
        this.zshrcPath = path.join(os.homedir(), ".zshrc");
        this.rosePath = path.join(path.dirname(fileURLToPath(import.meta.url)), "../rose.txt");
    }

    read() {
        const file = fs.readFileSync(this.zshrcPath, "utf-8");
        return file;
    }

    append(context) {
        fs.appendFileSync(this.zshrcPath, context, "utf-8");
    }

    write(context) {
        fs.writeFileSync(this.zshrcPath, context, "utf-8");
    }

    about() {
        const file = fs.readFileSync(this.rosePath, "utf-8");
        return file;
    }
}

export default ioHandler;
