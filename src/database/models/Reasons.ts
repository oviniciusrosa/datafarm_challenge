import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity("reasons")
export class Reasons extends BaseEntity {
  @PrimaryColumn("int") id: number;
  @Column("text") name: string;
  @Column("text") icon: string;
}
