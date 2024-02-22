import HttpClientAdapter from "../http/HttpClientAdapter";

export default class UserGatewayHttp {
  async login(username: string, password: string) {
    await HttpClientAdapter.post('auth/login', {
      username,
      password
    })
  }
}