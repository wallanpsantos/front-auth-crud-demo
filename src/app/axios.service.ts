import {Injectable} from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  private readonly AUTH_TOKEN_KEY = "auth_token";

  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  /* Gerenciar o acesso ao armazenamento local */
  getAuthToken(): string | null {
    return window.localStorage.getItem(this.AUTH_TOKEN_KEY)
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem(this.AUTH_TOKEN_KEY, token)
    } else {
      window.localStorage.removeItem(this.AUTH_TOKEN_KEY)
    }
  }

  request(method: string, url: string, data: any): Promise<any> {
    let headers = {}

    /* Cabeçalho de autorização caso token estiver presente em localstorage */
    if (this.getAuthToken() !== null) {
      headers = {"Authorization": "Bearer " + this.getAuthToken()};
    }

    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    })
  }
}
