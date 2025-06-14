import add from "../commands/add.js";
import error from "../error-handler/error-handler.js";

const commands = {
    "-a": {
        id: 0,
        name: "add",
        handler: (args) => {
            const name = args[0];
            const command = args.slice(1).join(" ");
            if (!name || !command) name && command ? add(name, command) : error("Add Need Params");
        },
    },
};

export default commands;
