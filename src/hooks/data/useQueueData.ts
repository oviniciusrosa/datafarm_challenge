import { QueueRepository } from "~/database/repositories/QueueRepository";
import { IQueue } from "~/models/IQueue";

export function useQueueData() {
  async function remove(content: IQueue): Promise<void> {
    const entities = QueueRepository.create(content);
    await QueueRepository.remove([entities]);
    await QueueRepository.remove([]);
  }

  async function add(content: IQueue): Promise<IQueue> {
    const item: IQueue = await QueueRepository.save(content);

    return item;
  }

  async function getAll(): Promise<IQueue[]> {
    const list: IQueue[] = (await QueueRepository.find()) as IQueue[];

    return list;
  }

  return { add, getAll, remove };
}
