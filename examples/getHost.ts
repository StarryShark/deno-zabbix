import { Zabbix } from "../mod.ts";

const zabbix: Zabbix = new Zabbix({
  url: "http://127.0.0.1/api_jsonrpc.php",
  user: "Admin",
  password: "zabbix",
});

const main = async () => {
  try {
    await zabbix.login();
    const hosts = await zabbix.request("host.get", {
      limit: 1,
    });
    console.log(JSON.stringify(hosts, null, 2));
    zabbix.logout();
  } catch (error) {
    console.error(error);
  }
};
main()
