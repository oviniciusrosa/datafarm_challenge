import { IFarms } from "./IFarms";
import { IFields } from "./IFields";
import { IMachineries } from "./IMachineries";
import { IReasons } from "./IReasons";

export interface IStop {
  uuid: string;
  idFarm: number;
  idField: number;
  idReason: number;
  idMachinery: number;
  note: string;
  minutes: number;
  longitude: number;
  latitude: number;

  createdAt?: any;
}

export interface IStopFilled {
  uuid: string;

  farm: IFarms;
  field: IFields;
  reason: IReasons;
  machinery: IMachineries;

  note?: string;
  minutes: number;
  longitude: number;
  latitude: number;

  createdAt?: any;
}
