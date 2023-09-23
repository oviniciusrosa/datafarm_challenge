import { Entity, Column, BaseEntity, Generated, PrimaryColumn } from "typeorm";

@Entity("stops")
export class Stops extends BaseEntity {
  @PrimaryColumn("text") @Generated("uuid") uuid: string;

  @Column("int") idFarm: number;
  @Column("int") idField: number;
  @Column("int") idReason: number;
  @Column("int") idMachinery: number;

  @Column("text", { nullable: true }) note: string;
  @Column("int") minutes: number;
  @Column("float") longitude: number;
  @Column("float") latitude: number;
}
