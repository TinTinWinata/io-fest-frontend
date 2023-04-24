import type { AxiosInstance, AxiosRequestConfig } from 'axios';
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

  private async getResponse(
    method: Method,
    data: any,
    url: string
  ): Promise<any> {
    // Return any because it can return anything (response from backend server)
    if (method === Method.GET) return await this.axios.get(url, data);
    else if (method === Method.POST) return await this.axios.post(url, data);
    else if (method === Method.PUT) return await this.axios.put(url, data);
    else if (method === Method.DELETE)
      return await this.axios.delete(url, data);
  }

  public async request(endpoint: Endpoint, id: string = '', data: any = {}) {
    let result: ResponseType;
    try {
      const url = endpoint.url + (id ? `/${id}` : ``);
      const response = await this.getResponse(endpoint.method, data, url);
      result = { data: response.data, isError: false };
    } catch (error) {
      const { response } = error as any;
      console.log('error : ', error);
      result = response
        ? { data: response.data.errors, isError: true }
        : {
            data: 'Sorry we have technical issues, please try again later. Have a nice day.',
            isError: true,
          };
    }
    return result;
  }
}

export default Service;
