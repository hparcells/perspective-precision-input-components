# Contributing

Thanks for your interest in contributing to Perspective Precision Input Components.

## Reporting Bugs & Requesting Features

Open an issue on [GitHub](https://github.com/hparcells/perspective-precision-input-components/issues). For bugs, include your Ignition version, module version, and steps to reproduce. For feature requests, describe the use case: what behavior is missing and why it matters in an industrial context.

## Development Setup

**Requirements:** Java 17+, Node.js 20+, an Ignition gateway for testing.

```bash
# Install web dependencies
cd web
npm install

# Build the module
./gradlew build
```

The built `.modl` file will be in `build/`. Install it on your gateway via the Config > Modules page.

> **Note:** Since this module is unsigned, your Ignition gateway must have **Developer Mode** enabled and **Allow Unsigned Modules** set to `true` in the gateway config (`ignition.conf`) before the module will install.
> 
> Add the following lines to `ignition.conf`:
> ```
> wrapper.java.additional.9=-Dignition.allowunsignedmodules=true
> wrapper.java.additional.10=-Dignition.developer.mode=true
> ```
> Adjust the index numbers (`9`, `10`) to avoid conflicts with any existing `wrapper.java.additional.*` entries in your config.

To run the docs site locally:

```bash
cd docs
npm install
npm start
```

## Submitting a Pull Request

1. Fork the repository and create a branch from `master`.
2. Make your changes. If adding a new component, follow the structure of an existing one (`DebouncedTextField` is a good reference).
3. Run Prettier before committing — `cd web && npm run prettier`.
4. Open a pull request with a clear description of what changed and why.

## Scope

This module targets behavioral gaps in Perspective's built-in input palette: debounce, validation, and structure. Purely cosmetic or layout components are out of scope, those are better solved with Perspective's native styling and layout tools, or an entirely different module entirely.
