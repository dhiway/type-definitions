import { types01, types02 } from "../src/index";
import fs from "fs";

fs.writeFileSync("./json/typesv1.json", JSON.stringify(types01, null, 4));
fs.writeFileSync("./json/typesv2.json", JSON.stringify(types02, null, 4));
