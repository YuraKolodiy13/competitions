import service from './service';
import {API_URL} from "../helpers/constants";

export const doLoginApi = data => {
  return service.post(
    `${API_URL}/login`, data
  )
};

export const doLogoutApi = () => {
  return service.post(
    `${API_URL}/logout/access`
  )
};