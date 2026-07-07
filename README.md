### Nexra Barcode

A high-performance WebAssembly-based barcode scanner and generator plugin for Frappe Framework v16, powered by ZXing-Wasm. Supports PDF417, EAN-13, Code 128, and QR Code natively.

### Installation

You can install this app using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd $PATH_TO_YOUR_BENCH
bench get-app $URL_OF_THIS_REPO --branch main
bench install-app nexra_barcode
```

### Contributing

This app uses `pre-commit` for code formatting and linting. Please [install pre-commit](https://pre-commit.com/#installation) and enable it for this repository:

```bash
cd apps/nexra_barcode
pre-commit install
```

Pre-commit is configured to use the following tools for checking and formatting your code:

- ruff
- eslint
- prettier
- pyupgrade

### License

mit
