import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity('projects')
export class ProjectEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  url: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  repository: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  text: string;
}
