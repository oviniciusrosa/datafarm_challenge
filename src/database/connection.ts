import { typeORMDriver } from "react-native-quick-sqlite";
import { DataSource } from "typeorm";
import { Person } from "./models/Person";

export const dataSource = new DataSource({
  database: "quicksqlitetest-typeorm.db",
  entities: [Person],
  location: ".",
  logging: [],
  synchronize: true,
  type: "react-native",
  driver: typeORMDriver,
});
