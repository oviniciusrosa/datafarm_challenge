import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Farms } from "./Farms";

@Entity("fields")
export class Fields extends BaseEntity {
  @PrimaryColumn("int") id: number;
  @Column("text") name: string;
  @Column("int") idFarm: number;

  @ManyToOne(_ => Farms, farm => farm.fields)
  @JoinColumn()
  farm: Farms;
}
