import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Posts {
  @PrimaryGeneratedColumn() id: number;
  @Column() title:string;
  @Column() published: boolean;
  flag: boolean;
  @Column() description: string;
}
