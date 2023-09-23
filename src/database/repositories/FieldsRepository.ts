import { dataSource } from "../connection";
import { Fields } from "../models/Fields";

export const FieldsRepository = dataSource.getRepository(Fields);
