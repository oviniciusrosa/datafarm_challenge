import { ReasonsRepository } from "~/database/repositories/ReasonsRepository";
import { IReasons } from "~/models/IReasons";

export function useReasonData() {
  async function insertAll(machineries: IReasons[]): Promise<IReasons[]> {
    const entities = ReasonsRepository.create(machineries);
    await ReasonsRepository.save(entities);

    return entities;
  }

  async function save(reason: IReasons): Promise<IReasons> {
    const item: IReasons = await ReasonsRepository.save(reason);

    return item;
  }

  async function getAll(): Promise<IReasons[]> {
    const list: IReasons[] = await ReasonsRepository.find();

    return list;
  }

  async function getById(id: number): Promise<IReasons> {
    const item: IReasons = await ReasonsRepository.findOne({ where: { id } });

    return item;
  }

  return { insertAll, save, getAll, getById };
}
