import axios, { AxiosInstance } from "axios";
import HttpClient from "./httpClient";

class HttpClientAdapter implements HttpClient {
  private axiosInstance: AxiosInstance | null = null
  private static instance: HttpClientAdapter | null = null

  constructor() {
    const BASE_URL = 'https://dummyjson.com'
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  public static getInstance(): HttpClient {
    if(!this.instance) {
      this.instance = new HttpClientAdapter()
    }
    return this.instance
  }

  async get(url: string, configs?: object | undefined): Promise<any> {
    return await this.axiosInstance?.get(url, configs)
  }

  async post(url: string, body: object, configs?: object | undefined): Promise<any> {
    return await this.axiosInstance?.post(url, body, configs)
  }

  async put(url: string, body: object, configs?: object | undefined): Promise<any> {
    return await this.axiosInstance?.put(url, body, configs)
  }

  async delete(url: string, configs?: object | undefined): Promise<any> {
    return await this.axiosInstance?.delete(url, configs)
  }
}


export default HttpClientAdapter.getInstance()