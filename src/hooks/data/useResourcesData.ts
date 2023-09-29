import { IResourceFarm, IResources } from "~/models/IResources";
import { useFarmData } from "./useFarmData";
import { useMachineryData } from "./useMachineryData";
import { useReasonData } from "./useReasonData";
import { IFields } from "~/models/IFields";
import { IFarms } from "~/models/IFarms";

export function useResourcesData() {
  const farmsDataAccess = useFarmData();
  const machineriesDataAccess = useMachineryData();
  const reasonsDataAccess = useReasonData();

  function formatFarms(farms: IResourceFarm[]): IFarms[] {
    let formattedFarms: IFarms[] = [];

    farms.forEach(farm => {
      const currentFields: IFields[] = farm.fields.map(field => ({
        ...field,
        idFarm: farm.id,
      }));

      const currentFarm = { ...farm, fields: currentFields };
      formattedFarms = [...formattedFarms, currentFarm];
    });

    return formattedFarms;
  }

  async function insertResources(resources: IResources) {
    const formattedFarms: IFarms[] = formatFarms(resources.farms);

    await Promise.all([
      farmsDataAccess.insertAll(formattedFarms),
      reasonsDataAccess.insertAll(resources.reasons),
      machineriesDataAccess.insertAll(resources.machineries),
    ]);
  }

  return { insertResources };
}
