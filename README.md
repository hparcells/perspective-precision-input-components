# Precision Input Components
> Structured and debounced input components for Ignition 8.3 Perspective.

> **This module is a work in progress.** Components and APIs may change before the first stable release.

Standard Perspective input components update their data sources on every keystroke. In industrial HMI applications, this creates potentially unwanted behavior such as incomplete values triggering tag writes, unnecessary script executions, or repeated database queries. Other inputs provide no enforcement of format or structure, leaving validation entirely up to the developer.

Precision Input Components addresses both problems with two types of components:

- **Debounced**: Separates the live editing value from the committed value so you only react to finished input.
- **Masked**: Enforces a fixed format mask (e.g. `(###) ###-####`) so only valid, complete values are ever committed. Returns both masked and unmasked values. 

## Documentation

[picdocs.hunterparcells.com](https://picdocs.hunterparcells.com)

## Installation

Download the latest `.modl` from [Releases](https://github.com/hparcells/perspective-precision-input-components/releases) and install it via **Platform > System > Modules** in your Ignition gateway. Accept any licenses and restart your gateway.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
