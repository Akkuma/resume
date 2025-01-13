import { writeFileSync } from "node:fs";

import * as theme from '@akkuma/jsonresume-theme-stackoverflow'
import { render } from 'resumed'

import { resume } from './resume.ts'

const html = await render(resume, theme)
writeFileSync('resume.html', html)