import { Post, IPostConfigBodyParams } from "./fetch.ts";

interface IZabbixConfig {
  url: string;
  user: string;
  password: string;
  options?: RequestInit;
}

export class Zabbix {
  private url: string;
  private user: string;
  private password: string;
  private options?: RequestInit;
  private auth: string | null;

  constructor(config: IZabbixConfig) {
    this.url = config.url;
    this.user = config.user;
    this.password = config.password;
    this.options = config.options || {};
    this.auth = null;
  }

  async request(method: string, params: IPostConfigBodyParams) {
    try {
      const response = await Post({
        url: this.url,
        method: method,
        params: params,
        auth: this.auth,
        options: this.options,
      });

      if (response.result) {
        return response.result;
      } else {
        throw JSON.stringify(response);
      }
    } catch (error) {
      throw error;
    }
  }

  async login() {
    try {
      const result = await this.request("user.login", {
        user: this.user,
        password: this.password,
      });
      this.auth = result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      const result = await this.request("user.logout", []);
      this.auth = null;
      return result;
    } catch (error) {
      throw error;
    } finally {
      this.auth = null;
    }
  }
}
