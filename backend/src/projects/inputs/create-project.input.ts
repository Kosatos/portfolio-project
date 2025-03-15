import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  url: string;

  @Field({ nullable: true })
  repository: string;

  @Field({ nullable: true })
  text: string;
}
