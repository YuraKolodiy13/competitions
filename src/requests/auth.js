import service from './service';
import {API_URL} from "../helpers/constants";

const api = '/api';

export const doLoginApi = data => {
  return service.post(
    `${api}/auth/signin`, data
  )
};

export const doRegisterApi = data => {
  return service.post(
    `${api}/auth/signup`, data
  )
};

export const doLogoutApi = () => {
  return service.post(
    `${api}/logout/access`
  )
};