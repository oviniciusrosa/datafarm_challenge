import { dataSource } from "../connection";
import { Farms } from "../models/Farms";

export const FarmsRepository = dataSource.getRepository(Farms);
