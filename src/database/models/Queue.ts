import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity("queue")
export class Queue extends BaseEntity {
  @PrimaryColumn("int") id: number;
  @Column("text") endpoint: string;
  @Column("text") httpMethod: string; /// POST | PUT | PATCH | DELETE
  @Column("text") data: string; /// JSON
}
