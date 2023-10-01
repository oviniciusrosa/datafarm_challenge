import { useResources } from "~/contexts/resources";
import { useResourcesApi } from "~/hooks/services/useResourcesApi";

export function useFillResources() {
  const { insertResources, fillResources } = useResources();

  const { getResources, loading, error } = useResourcesApi();

  async function getResourcesFromAPI() {
    const { data } = await getResources();

    if (!!data) {
      await insertResources(data.resources);
      await fillResources();
    }
  }

  return {
    getResourcesFromAPI,
    loading,
    error,
  };
}
