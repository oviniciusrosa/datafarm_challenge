import { IFarms } from "~/models/IFarms";
import { IFields } from "~/models/IFields";
import { IMachineries } from "~/models/IMachineries";
import { IReasons } from "~/models/IReasons";
import { IResourceFarm, IResources } from "~/models/IResources";
import { IStop, IStopFilled } from "~/models/IStops";
import { FarmFormatter } from "./FarmFormatter";

export class StopFormatter {
  static fill(stop: IStop, resources: IResources): IStopFilled {
    const resourceFarm: IResourceFarm = resources.farms.find(
      farm => farm.id === stop.idFarm
    );
    const resourceReason: IReasons = resources.reasons.find(
      reason => reason.id === stop.idReason
    );
    const resourceMachinery: IMachineries = resources.machineries.find(
      machinery => machinery.id === stop.idMachinery
    );

    const formattedFarm = FarmFormatter.fromResource(resourceFarm);

    const foundField: IFields = formattedFarm.fields.find(
      field => field.id === stop.idField
    );

    return {
      uuid: stop.uuid,
      latitude: stop.latitude,
      longitude: stop.longitude,
      minutes: stop.minutes,
      note: stop.note,
      reason: resourceReason,
      machinery: resourceMachinery,
      farm: formattedFarm,
      field: foundField,
    };
  }
}
