# deno-zabbix

Zabbix is an open-source monitoring software that monitors almost everything like networks, servers, applications, etc. You may learn more about Zabbix at [www.zabbix.com](https://www.zabbix.com/).

**Deno-Zabbix** is a [Deno](https://deno.land) module for JavaScript/TypeScript runtime environment to interact with Zabbix APIs. There are no third-party module dependencies.

## Table of Contents

- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Usage

Please make necessary changes in `url`, `user`, and `password` below and save it in a file `getHost.ts`. The example below is implicitly using the latest version of `deno-zabbix` module.

```ts
import { Zabbix } from "https://deno.land/x/zabbix/mod.ts";

const zabbix: Zabbix = new Zabbix({
  url: "http://127.0.0.1/api_jsonrpc.php",
  user: "Admin",
  password: "zabbix",
});

const main = async () => {
  try {
    await zabbix.login()
    const host = await zabbix.request('host.get', {
      selectInterfaces: 'extend',
      limit: 1
    })
    console.log(JSON.stringify(host, null, 2))
    zabbix.logout()
  } catch (error) {
    console.error(error)
  }
}
main()
```

Run the program:

```shell
deno run --allow-net getHost.ts
```

## Examples

Please check the examples below to get started.

- [getHost](examples/getHost.ts)

## Contributing

👋Thanks for thinking about contributing to `deno-zabbix`! Please check out [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)

Copyright (c) 2020 Sumit Goel.
