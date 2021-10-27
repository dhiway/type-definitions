import { types } from "../src/index";
import fs from "fs";

fs.writeFileSync("./json/types.json", JSON.stringify(types, null, 4));
