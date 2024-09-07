/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Environment from '../environment';
import Utils from '../common/utils';

export default class ApiService {
  private static host = `${Environment.CLOUD_HOST}/dashboard`;
  private static getHeaders = () => {
    return {
      'Content-Type': 'application/json',
      Authorization: Utils.getCookie('Authorization'),
    };
  };
  private static axiosCall = async (
    url: string,
    method: string,
    headers: any,
    data: any
  ) => {
    return axios({
      url: url,
      method: method,
      headers: headers,
      data: data,
    })
      .then(function (response: any) {
        return response.data;
      })
      .catch(function (response) {
        if (response?.response?.data?.code === 403) {
          window.location.href = window.location.origin + '/';
        }
        response = response?.response?.data;
        console.log({
          url,
          method,
          headers,
          data,
          response,
        });
        return response;
      });
  };

  static Admins = class {
    private static host = `${ApiService.host}/admins`;

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
  };
}
