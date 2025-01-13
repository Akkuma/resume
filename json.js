import { writeFileSync } from "node:fs";
import { resume } from './resume.ts'

writeFileSync("./resume.json", JSON.stringify(resume, undefined, '\t'));
