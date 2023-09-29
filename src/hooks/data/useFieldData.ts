import { FieldsRepository } from "~/database/repositories/FieldsRepository";
import { IFields } from "~/models/IFields";

export function useFieldData() {
  async function insertAll(fields: IFields[]): Promise<IFields[]> {
    const entities = FieldsRepository.create(fields);
    await FieldsRepository.save(entities);

    return entities;
  }

  async function save(farm: IFields): Promise<IFields> {
    const item: IFields = await FieldsRepository.save(farm);

    return item;
  }

  async function getAll(): Promise<IFields[]> {
    const list: IFields[] = await FieldsRepository.find();

    return list;
  }

  async function getById(id: number): Promise<IFields> {
    const item: IFields = await FieldsRepository.findOne({ where: { id } });

    return item;
  }

  return { insertAll, save, getAll, getById };
}
