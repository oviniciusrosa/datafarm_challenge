import { AxiosResponse } from "axios";
import { useApi } from "~/hooks/services/useApi";
import { IResourcesResponse } from "~/models/IResourcesResponse";

export function useResourcesApi() {
  const [api, { loading, error }] = useApi();

  async function getResources(): Promise<IResourcesResponse> {
    return api
      .get<AxiosResponse<IResourcesResponse>>({
        endpoint: "/mobile/machine/resources",
      })
      .then(response => response.data);
  }

  return {
    getResources,
    loading,
    error,
  };
}
