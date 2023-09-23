import { dataSource } from "../connection";
import { Reasons } from "../models/Reasons";

export const ReasonsRepository = dataSource.getRepository(Reasons);
