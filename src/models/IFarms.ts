import { IFields } from "./IFields";

export interface IFarms {
  id: number;
  name: string;
  growerName: string;
  fields?: IFields[];
}
