import { CreateProjectInput } from '@/projects/inputs/create-project.input';
import { UpdateProjectInput } from '@/projects/inputs/update-project.input';
import { ProjectEntity } from '@/projects/project.entity';
import { ProjectService } from '@/projects/project.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Project')
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => ProjectEntity)
  async createProject(
    @Args('createProject') input: CreateProjectInput,
  ): Promise<ProjectEntity> {
    return await this.projectService.createProject(input);
  }

  @Mutation(() => ProjectEntity)
  async updateProject(
    @Args('updateProject') input: UpdateProjectInput,
  ): Promise<ProjectEntity | null> {
    return await this.projectService.updateProject(input);
  }

  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.projectService.removeProject(id);
  }

  @Query(() => ProjectEntity)
  async getOneProject(@Args('id') id: number): Promise<ProjectEntity | null> {
    return await this.projectService.getOneProject(id);
  }

  @Query(() => [ProjectEntity])
  async getAllProjects(): Promise<ProjectEntity[]> {
    return await this.projectService.getAllProjects();
  }
}
