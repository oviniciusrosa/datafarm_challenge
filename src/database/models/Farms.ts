import { Entity, Column, BaseEntity, PrimaryColumn, OneToMany } from "typeorm";
import { Fields } from "./Fields";

@Entity("farms")
export class Farms extends BaseEntity {
  @PrimaryColumn("int") id: number;
  @Column("text") name: string;
  @Column("text") growerName: string;

  @OneToMany(_ => Fields, fields => fields.idFarm) fields: Fields[];
}
