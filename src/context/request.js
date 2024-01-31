import axios from 'axios';
import Cookies from 'js-cookie';
import { COOKIES } from './constants';
import { handleError } from './handleError';
import { MOCK_DATA_GET } from '../mockData/mockDataGet';
import { MOCK_DATA_POST } from '../mockData/mockDataPost';
import Notice from '../res/components/Notice';
import { logOut } from '../res/commonFunction';
import { MOCK_DATA_DELETE } from '../mockData/mockDataDelete';

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    if (response.data.status === 1 || response.data.status === -1) {
      if (response.data.object === 'Token đã hết hạn') logOut();
      Notice({ msg: response.data.object, isSuccess: false });
    }
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const instance = axios.create({
  baseURL: `${process.env.NODE_ENV === 'production' ? window.SystemConfig.URL : process.env.URL}/api`,
});

instance.defaults.timeout = 25000;

instance.interceptors.request.use(req => {
  req.headers.Authorization = `${Cookies.get(COOKIES.accessToken)}`;
  return req;
});

instance.interceptors.response.use(
  response => response,
  error => {
    const responseError = {
      ...error,
      response: {
        ...error.response,
      },
    };

    if (error.response) {
      handleError(error.response);
    }

    return responseError;
  },
);

export async function axiosGet(path) {
  if (MOCK_DATA_GET[path] && MOCK_DATA_GET[path].switch) return MOCK_DATA_GET[path];
  const res = await instance
    .get(path)
    .then(checkStatus)
    .catch(error => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}

export async function axiosPost(path, body) {
  if (MOCK_DATA_POST[path] && MOCK_DATA_POST[path].switch) return MOCK_DATA_POST[path];
  const res = await instance
    .post(path, body)
    .then(checkStatus)
    .catch(error => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}
export async function axiosDelete(path) {
  if (MOCK_DATA_DELETE[path] && MOCK_DATA_DELETE[path].switch) return MOCK_DATA_DELETE[path];
  const res = await instance
    .delete(path)
    .then(checkStatus)
    .catch(error => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}

export async function axiosPostNoCheck(path, body) {
  if (MOCK_DATA_POST[path] && MOCK_DATA_POST[path].switch) return MOCK_DATA_POST[path];
  const res = await instance.post(path, body).catch(error => {
    if (!JSON.parse(JSON.stringify(error)).response) throw error;
  });
  return res;
}
export async function axiosGetNoCheck(path) {
  if (MOCK_DATA_GET[path] && MOCK_DATA_GET[path].switch) return MOCK_DATA_GET[path];
  const res = await instance.get(path).catch(error => {
    if (!JSON.parse(JSON.stringify(error)).response) throw error;
  });
  return res;
}
