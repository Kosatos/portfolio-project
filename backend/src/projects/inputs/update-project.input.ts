import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  url: string;

  @Field({ nullable: true })
  repository: string;

  @Field({ nullable: true })
  text: string;
}
