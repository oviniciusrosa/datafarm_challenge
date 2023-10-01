import { AxiosResponse } from "axios";
import { useApi } from "~/hooks/services/useApi";
import { IAuthResponse } from "~/models/IAuthResponse";

interface ILogin {
  email: string;
  senha: string;
  idPartner: number;
}

export function useLoginApi() {
  const [api, { loading, error }] = useApi();

  async function login(data: ILogin): Promise<IAuthResponse> {
    return api
      .post<AxiosResponse<IAuthResponse>>({
        endpoint: "/api/auth/v2",
        data,
      })
      .then(response => response.data);
  }

  return {
    login,
    loading,
    error,
  };
}
