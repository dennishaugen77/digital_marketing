import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios"
import { API_URL } from "@/constants/config"
import { store } from "@/store"
import { spinnerActions } from "@/store/spinner/spinner.slice"

const http = axios.create({ baseURL: API_URL })

const request = (
  method: Method,
  url: string,
  options: AxiosRequestConfig,
  hasSpinner = false,
) => {
  if (hasSpinner) {
    store.dispatch(spinnerActions.startLoading())
  }

  const {
    authReducer: { tokens },
  } = store.getState()

  if (tokens) {
    options = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    }
  }

  return http
    .request({
      ...options,
      method,
      url,
    })
    .then(httpResponseHandler)
    .catch(httpErrorHandler)
    .finally(() => {
      if (hasSpinner) {
        store.dispatch(spinnerActions.finishLoading())
      }
    })
}

const httpResponseHandler = (response: AxiosResponse) => {
  return response.data
}

const httpErrorHandler = async (err: any) => {
  const response = err?.response
  const data = response?.data

  throw {
    ...data,
    message:
      typeof data === "string"
        ? data
        : typeof data?.message === "string"
          ? data?.message
          : "Network Error!",
  }
}

export const Http = {
  get(url: string, params = {}, headers = {}, hasSpinner = false) {
    return request("GET", url, { params, headers }, hasSpinner)
  },
  post(url: string, body = {}, headers = {}, hasSpinner = false) {
    return request("POST", url, { data: body, headers }, hasSpinner)
  },
  put(url: string, body = {}, headers = {}, hasSpinner = false) {
    return request("PUT", url, { data: body, headers }, hasSpinner)
  },
  patch(url: string, body = {}, headers = {}, hasSpinner = false) {
    return request("PATCH", url, { data: body, headers }, hasSpinner)
  },
  delete(url: string, body = {}, headers = {}, hasSpinner = false) {
    return request("DELETE", url, { data: body, headers }, hasSpinner)
  },
}
