/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Environment from '../environment';
import Utils from '../common/utils';

export default class ApiService {
  static get_host = () => {
    return `${Environment.CLOUD_HOST}/dashboard`;
  };
  static getHeaders = () => {
    return {
      'Content-Type': 'application/json',
      Authorization: Utils.getCookie('Authorization'),
    };
  };
  static axiosCall = async (
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
}
