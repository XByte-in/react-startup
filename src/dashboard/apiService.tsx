/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Environment from '../environment';

export default class ApiService {
  private static host = `${Environment.CLOUD_HOST}/dashboard`;
  private static getHeaders = (credential: string) => {
    return {
      'Content-Type': 'application/json',
      Authorization: credential,
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

    static verify = async (credential: string) => {
      return ApiService.axiosCall(
        `${this.host}/verify`,
        'GET',
        ApiService.getHeaders(credential),
        null
      );
    };

    static get = async (credential: string) => {
      return ApiService.axiosCall(
        `${this.host}/get_all`,
        'POST',
        ApiService.getHeaders(credential),
        {}
      );
    };

    static add = async (
      credential: string,
      data: { [key: string]: string }
    ) => {
      return ApiService.axiosCall(
        `${this.host}/add`,
        'POST',
        ApiService.getHeaders(credential),
        data
      );
    };

    static update = async (
      credential: string,
      data: { [key: string]: string | boolean }
    ) => {
      return ApiService.axiosCall(
        `${this.host}/update`,
        'PUT',
        ApiService.getHeaders(credential),
        data
      );
    };

    static delete = async (credential: string, email: string) => {
      return ApiService.axiosCall(
        `${this.host}/delete/${email}`,
        'DELETE',
        ApiService.getHeaders(credential),
        {}
      );
    };
  };
}
