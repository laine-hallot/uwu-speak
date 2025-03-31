import { resolve } from "node:path";
import { writeFileSync } from "node:fs";

import { uwuLangTsx } from "./src/syntaxes/tsx/tsx.js";

writeFileSync(
  resolve("./syntaxes/", "uwu-script.tmLanguage.json"),
  JSON.stringify(uwuLangTsx, null, 2)
);
