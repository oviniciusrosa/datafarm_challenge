import { dataSource } from "../connection";
import { Machineries } from "../models/Machineries";

export const MachineriesRepository = dataSource.getRepository(Machineries);
