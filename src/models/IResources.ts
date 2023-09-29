import { IFarms } from "./IFarms";
import { IFields } from "./IFields";
import { IMachineries } from "./IMachineries";
import { IReasons } from "./IReasons";

type IResourceField = Omit<IFields, "idFarm">;

export type IResourceFarm = Omit<IFarms, "fields"> & {
  fields: IResourceField[];
};

export interface IResources {
  machineries: IMachineries[];
  farms: IResourceFarm[];
  reasons: IReasons[];
}
