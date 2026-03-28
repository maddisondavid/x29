# x29 Init

## Command

```bash
x29 init
```

Optional arguments:

```bash
x29 init <target-directory> --number <value> --title <value>
```

The interactive flow asks for:

- target location
- capability number
- short title

You can still provide any or all of those values on the command line. Missing values will be prompted for.

Recommended capability naming:

```text
JA-<number>-Short-Title
```

## What it creates

The bootstrap command creates:

- a target workspace if it does not exist
- `capabilities/<capability-name>/`
- numbered stage subdirectories
- starter markdown files copied from `templates/`
- supporting `context/` and `notebook/` directories where appropriate
- a sample layout marker so teams can see the intended working shape immediately

## Practical intent

This initializer is intentionally simple. It does not attempt to infer project topology, inspect runtime frameworks, or generate bespoke stage logic. It exists to make `x29` feel installable and to remove setup friction.

## TODO

- Add flags for lightweight vs fuller bootstrap modes
- Add optional sample capability content packs
- Add repo-aware initialization for existing delivery conventions
