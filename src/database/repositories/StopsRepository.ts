import { dataSource } from "../connection";
import { Stops } from "../models/Stops";

export const StopsRepository = dataSource.getRepository(Stops);
