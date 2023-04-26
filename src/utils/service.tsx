import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { Endpoint, Method } from '../types/endpoint';
import { ResponseType } from '../types/response';

export const enum ContentType {
  MULTIPART,
  JSON,
}

class Service {
  protected axios: AxiosInstance;

  private getContentType(contentType: ContentType): string {
    return contentType == ContentType.JSON
      ? 'application/json'
      : 'multipart/form-data';
  }

  constructor(
    accessToken?: string,
    contentType: ContentType = ContentType.JSON
  ) {
    const baseURL = import.meta.env.VITE_API_URL;
    const axiosConfig: AxiosRequestConfig = {
      baseURL,
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
        ContentType: this.getContentType(contentType),
      },
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
    else if (method === Method.PATCH) return await this.axios.patch(url, data);
    else if (method === Method.DELETE)
      return await this.axios.delete(url, data);
  }

  public generateUrl(
    endpoint: Endpoint,
    id: string = '',
    data: any = {},
    param: any = {}
  ) {
    let url = endpoint.url;
    url += id ? `/${id}` : ``;

    Object.keys(param).forEach((key) => {
      url += `?${key}=${param[key]}`;
    });
    return url;
  }

  public async request(
    endpoint: Endpoint,
    id: string = '',
    data: any = {},
    param: any = {}
  ) {
    let result: ResponseType;
    try {
      const url = this.generateUrl(endpoint, id, data, param);
      console.log('url : ', url);
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
