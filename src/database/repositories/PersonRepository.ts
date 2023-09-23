import { dataSource } from "../connection";
import { Person } from "../models/Person";

export const PersonRepository = dataSource.getRepository(Person);
