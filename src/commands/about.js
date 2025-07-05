import gradient from "gradient-string";
import ioHandler from "../scripts/ioHandler.js";

const about = function () {
    const IO = new ioHandler();
    const rose = IO.about();
    console.log(gradient(["#FF2F00", "#891A01"])(rose));
};

export default about;
