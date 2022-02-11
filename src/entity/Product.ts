import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class Product extends BaseEntity {

    @PrimaryColumn()
     sku!: string;
   
   @Column("varchar",{length:200}) 
    name!: string;

   @Column("int")
   cant!: number;
}