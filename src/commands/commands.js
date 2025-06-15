import add from "../commands/add.js";
import error from "../error-handler/error-handler.js";
import edit from "./edit.js";
import remove from "./remove.js";

const commands = {
    "-a": {
        id: 0,
        name: "add",
        handler: (args) => {
            const name = args[0];
            const command = args.slice(1).join(" ");
            name && command ? add(name, command) : error("Add Need Params");
        },
    },
    "-e": {
        id: 0,
        name: "edit",
        handler: (args) => {
            const name = args[0];
            const command = args.slice(1).join(" ");
            name && command ? edit(name, command) : error("Add Need Params");
        },
    },
    "-r": {
        id: 0,
        name: "remove",
        handler: (args) => {
            const name = args[0];
            name ? remove(name) : error("123");
        },
    },
};

export default commands;
