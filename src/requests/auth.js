import service from './service';
import {API_URL} from "../helpers/constants";

export const doLoginApi = data => {
  return service.post(
    `/api/auth/signin`, data
  )
};

export const doRegisterApi = data => {
  return service.post(
    `/api/auth/signup`, data
  )
};

export const doLogoutApi = () => {
  return service.post(
    `${API_URL}/logout/access`
  )
};