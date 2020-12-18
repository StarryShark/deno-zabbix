# Contributing to Deno-Zabbix

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to `deno-zabbix`. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

<!-- markdownlint-disable-next-line header-increment -->
#### Table Of Contents

* [Code of Conduct](#code-of-conduct)

* [How Can I Contribute?](#how-can-i-contribute)

* [Setup your Development Environment](#setup-your-development-environment)

  * [Configure TypeScript ESLint](#configure-typescript-eslint)

  * [Run Tests](#run-tests)

## Code of Conduct

This project and everyone participating in it is governed by the [Deno-Zabbix Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [sumit@goel.pw](mailto:sumit@goel.pw).

## How Can I Contribute?

* Use the module in your projects and report any bugs you may find or suggest enhancements by filing issues. Please make sure to checkout the current and past issues and reviewing the existing [examples](examples) before filling an issue.

* Submit examples to cover the Zabbix APIs that are not in examples already by sending pull request

* Submit test cases to cover all or most of the Zabbix APIs by sending pull request

## Setup your Development Environment

* Install [deno](https://deno.land/manual/getting_started/installation)

  ```shell
  deno --version
  ```

* Configure [editor](https://deno.land/manual/getting_started/setup_your_environment)

* Use [GitHub Guide](https://guides.github.com/activities/forking/) for Forking Projects workflow

### Configure [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint/tree/master/docs/getting-started/linting)

```shell
npm install
npm run lint
```

### Run Tests

```shell
npm test
```
