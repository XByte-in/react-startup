import ApiService from '../../common/apiService';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default class AdminApiService {
  private static host = `${ApiService.get_host()}/admins`;

  static verify = async () => {
    return ApiService.axiosCall(
      `${this.host}/verify`,
      'GET',
      ApiService.getHeaders(),
      null
    );
  };

  static get = async () => {
    return ApiService.axiosCall(
      `${this.host}/get_all`,
      'POST',
      ApiService.getHeaders(),
      {}
    );
  };

  static add = async (data: { [key: string]: string }) => {
    return ApiService.axiosCall(
      `${this.host}/add`,
      'POST',
      ApiService.getHeaders(),
      data
    );
  };

  static update = async (data: { [key: string]: string | boolean }) => {
    return ApiService.axiosCall(
      `${this.host}/update`,
      'PUT',
      ApiService.getHeaders(),
      data
    );
  };

  static delete = async (emails: string[]) => {
    return ApiService.axiosCall(
      `${this.host}/delete`,
      'DELETE',
      ApiService.getHeaders(),
      emails
    );
  };
}
