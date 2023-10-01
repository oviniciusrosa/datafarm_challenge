import { dataSource } from "../connection";
import { Queue } from "../models/Queue";

export const QueueRepository = dataSource.getRepository(Queue);
