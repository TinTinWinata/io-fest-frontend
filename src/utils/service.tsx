import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { Endpoint, Method } from '../types/endpoint';
import { ResponseType } from '../types/response';

class Service {
  protected axios: AxiosInstance;

  constructor(accessToken?: string) {
    const baseURL = import.meta.env.VITE_API_URL;
    const axiosConfig: AxiosRequestConfig = {
      baseURL,
      headers: { Authorization: accessToken ? `Bearer ${accessToken}` : '' },
    };
    this.axios = axios.create(axiosConfig);
  }

  public async request(endpoint: Endpoint, id: string = '', data: any = {}) {
    console.log('data : ', data);
    let result: ResponseType;
    try {
      const url = endpoint.url + (id ? `/${id}` : ``);
      const response =
        endpoint.method === Method.POST
          ? await this.axios.post(url, data)
          : await this.axios.get(url, data);
      result = { data: response.data, isError: false };
    } catch (error) {
      const { response } = error as AxiosError;
      const errorMessage = response
        ? `[${response.status} ${response.statusText}] ${response.data!}`
        : '[500 Internal Server Error].';
      result = { data: errorMessage, isError: true };
    }
    return result;
  }
}

export default Service;
