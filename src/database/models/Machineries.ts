import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity("machineries")
export class Machineries extends BaseEntity {
  @PrimaryColumn("int") id: number;
  @Column("text") name: string;
  @Column("text", { nullable: true }) serialNumber: string;
  @Column("int") growerId: number;
}
