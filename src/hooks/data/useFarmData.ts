import { FarmsRepository } from "~/database/repositories/FarmsRepository";
import { IFarms } from "~/models/IFarms";

export function useFarmData() {
  async function insertAll(farms: IFarms[]): Promise<IFarms[]> {
    const entities = FarmsRepository.create(farms);
    await FarmsRepository.save(entities);

    return entities;
  }

  async function save(farm: IFarms): Promise<IFarms> {
    const item: IFarms = await FarmsRepository.save(farm);

    return item;
  }

  async function getAll(): Promise<IFarms[]> {
    const list: IFarms[] = await FarmsRepository.find();

    return list;
  }

  async function getById(id: number): Promise<IFarms> {
    const item: IFarms = await FarmsRepository.findOne({ where: { id } });

    return item;
  }

  return { insertAll, save, getAll, getById };
}
