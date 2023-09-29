import { MachineriesRepository } from "~/database/repositories/MachineriesRepository";
import { IMachineries } from "~/models/IMachineries";

export function useMachineryData() {
  async function insertAll(
    machineries: IMachineries[]
  ): Promise<IMachineries[]> {
    const entities = MachineriesRepository.create(machineries);
    await MachineriesRepository.save(entities);

    return entities;
  }

  async function save(machinery: IMachineries): Promise<IMachineries> {
    const item: IMachineries = await MachineriesRepository.save(machinery);

    return item;
  }

  async function getAll(): Promise<IMachineries[]> {
    const list: IMachineries[] = await MachineriesRepository.find();

    return list;
  }

  async function getById(id: number): Promise<IMachineries> {
    const item: IMachineries = await MachineriesRepository.findOne({
      where: { id },
    });

    return item;
  }

  return { insertAll, save, getAll, getById };
}
