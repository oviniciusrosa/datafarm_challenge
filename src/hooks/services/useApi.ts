import { useState, useCallback, useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import { getJwtToken } from "~/services/auth";
import { apiClient } from "~/services/client";

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

interface RequestProps {
  endpoint: string;
  data?: any;
  config?: AxiosRequestConfig;
}

type ApiAccesProps = [
  {
    post: <T>(props: RequestProps) => Promise<T>;
    get: <T>(props: RequestProps) => Promise<T>;
    put: <T>(props: RequestProps) => Promise<T>;
    patch: <T>(props: RequestProps) => Promise<T>;
    delete: <T>(props: RequestProps) => Promise<T>;
  },
  {
    loading: boolean;
    error: string | null;
  }
];

export function useApi(): ApiAccesProps {
  const [error, setError] = useState<string | null>(null);
  const [loading, isLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!!error) {
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  }, [error]);

  async function request<T = any>(
    method: HttpMethod,
    { endpoint, data, config }: RequestProps
  ) {
    return apiClient<T>({
      ...config,
      method,
      url: endpoint,
      data,
      headers: {
        Accept: "application/json, text/plain, */*",
        TokenAuthorization: `${"Bearer " + getJwtToken()}`,
      },
    });
  }

  async function call<T = any>(
    method: HttpMethod,
    { endpoint, data = {}, config = {} }: RequestProps
  ) {
    setError(null);
    isLoading(true);

    return request<T>(method, { endpoint, data, config })
      .catch(error => {
        if (error.response.status === 500) {
          console.error(error.response.data.message);
        }

        setError(error.response.data);

        return null;
      })
      .finally(() => {
        isLoading(false);
      });
  }

  const post = <T>(props: RequestProps) => call<T>("post", props);
  const get = <T>(props: RequestProps) => call<T>("get", props);
  const put = <T>(props: RequestProps) => call<T>("put", props);
  const patch = <T>(props: RequestProps) => call<T>("patch", props);
  const _delete = <T>(props: RequestProps) => call<T>("delete", props);

  const api = { get, post, put, patch, delete: _delete };

  return [api, { loading, error }];
}
