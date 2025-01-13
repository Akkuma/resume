# Personal JSON Resume Builder

This is a fast combo of some custom logic for generating my resume and maintaining my own custom theme alongside it. The biggest reason for the custom logic is that I used TypeScript
to write the resume rather than json as it allows for adding code & comments into the mix.

I could make this into a monorepo or push up my customized theme into its own repo. However, this is used so infrequently it isn't a pressing priority.

## Getting started

`pnpm i` and that should get everything installed including our local custom theme.

## Commands

`pnpm json` this takes `resume.ts` and turns that into `resume.json` for use with `resumed`

`pnpm render` takes our `resume.json` and creates our `resume.html`

`pnpm pdf` calls `render` and then generates a `pdf` based on the `resume.html` using `playwright`

`pnpm validate` ensures a proper `resume.json`, which `render` relies upon and in turn what `pdf` uses