import { IResourceFarm, IResourceField, IResources } from "~/models/IResources";
import { useFarmData } from "./useFarmData";
import { useMachineryData } from "./useMachineryData";
import { useReasonData } from "./useReasonData";
import { IFields } from "~/models/IFields";
import { IFarms } from "~/models/IFarms";
import { IMachineries } from "~/models/IMachineries";
import { IReasons } from "~/models/IReasons";
import { FarmFormatter } from "~/utils/formatters/FarmFormatter";

export function useResourcesData() {
  const farmsDataAccess = useFarmData();
  const machineriesDataAccess = useMachineryData();
  const reasonsDataAccess = useReasonData();

  async function insertResources(resources: IResources) {
    const formattedFarms: IFarms[] = resources.farms.map(farm =>
      FarmFormatter.fromResource(farm)
    );

    await Promise.all([
      farmsDataAccess.insertAll(formattedFarms),
      reasonsDataAccess.insertAll(resources.reasons),
      machineriesDataAccess.insertAll(resources.machineries),
    ]);
  }

  async function getResources(): Promise<IResources> {
    const farms: IFarms[] = await farmsDataAccess.getAll();
    const machineries: IMachineries[] = await machineriesDataAccess.getAll();
    const reasons: IReasons[] = await reasonsDataAccess.getAll();

    return {
      farms: farms as IResourceFarm[],
      machineries,
      reasons,
    };
  }

  return { insertResources, getResources };
}
