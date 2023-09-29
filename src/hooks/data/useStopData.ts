import { StopsRepository } from "~/database/repositories/StopsRepository";
import { IStop } from "~/models/IStops";

export function useStopData() {
  async function save(farm: IStop): Promise<IStop> {
    const item: IStop = await StopsRepository.save(farm);

    return item;
  }

  async function getAll(): Promise<IStop[]> {
    const list: IStop[] = await StopsRepository.find();

    return list;
  }

  async function getById(uuid: string): Promise<IStop> {
    const item: IStop = await StopsRepository.findOne({ where: { uuid } });

    return item;
  }

  return { save, getAll, getById };
}
