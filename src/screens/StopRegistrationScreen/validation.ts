import { IStop } from "~/models/IStops";

export function validateStopRegistration(stop: IStop): string | void {
  if (!stop.idMachinery) return "Necessário informar equipamento!";
  if (!stop.idFarm) return "Necessário informar fazenda!";
  if (!stop.idField) return "Necessário informar talhão!";
  if (!stop.idReason) return "Necessário informar motivo da parada!";
}
