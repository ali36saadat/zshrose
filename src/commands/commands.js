import error from "../error-handler/error-handler.js";
import add from "../commands/add.js";
import about from "./about.js";
import edit from "./edit.js";
import list from "./list.js";
import remove from "./remove.js";

const cli = {
    about: {
        id: 0,
        handler: () => {
            about();
        },
    },
    add: {
        id: 1,
        handler: (args) => {
            const name = args[0];
            const command = args.slice(1).join(" ");
            name && command ? add(name, command) : error("err001");
        },
    },
    edit: {
        id: 2,
        handler: (args) => {
            const name = args[0];
            const command = args.slice(1).join(" ");
            name && command ? edit(name, command) : error("err001");
        },
    },
    remove: {
        id: 3,
        handler: (args) => {
            const name = args[0];
            name ? remove(name) : error("err001");
        },
    },
    list: {
        id: 4,
        handler: (args) => {
            const startsWith = args[0];
            list(startsWith);
        },
    },
};

export default cli;
