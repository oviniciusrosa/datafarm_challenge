import { typeORMDriver } from "react-native-quick-sqlite";
import { DataSource } from "typeorm";
import { TABLE_LIST } from "./constants/table";

export const dataSource = new DataSource({
  database: "quicksqlitetest-typeorm.db",
  entities: TABLE_LIST,
  location: ".",
  logging: [],
  synchronize: true,
  type: "react-native",
  driver: typeORMDriver,
});
