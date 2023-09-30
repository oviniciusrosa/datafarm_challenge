import { IFarms } from "~/models/IFarms";
import { IFields } from "~/models/IFields";
import { IResourceFarm } from "~/models/IResources";

export class FarmFormatter {
  static fromResource(farm: IResourceFarm): IFarms {
    const currentFields: IFields[] = farm.fields.map(field => ({
      ...field,
      idFarm: farm.id,
    }));

    return { ...farm, fields: currentFields };
  }
}
