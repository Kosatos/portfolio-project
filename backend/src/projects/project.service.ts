import { CreateProjectInput } from '@/projects/inputs/create-project.input';
import { UpdateProjectInput } from '@/projects/inputs/update-project.input';
import { ProjectEntity } from '@/projects/project.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  async createProject(input: CreateProjectInput): Promise<ProjectEntity> {
    return await this.projectRepository.save({ ...input });
  }

  async getOneProject(id: number): Promise<ProjectEntity | null> {
    return await this.projectRepository.findOne({ where: { id } });
  }

  async getAllProjects(): Promise<ProjectEntity[]> {
    return await this.projectRepository.find();
  }

  async removeProject(id: number): Promise<number> {
    await this.projectRepository.delete({ id });
    return id;
  }

  async updateProject(
    input: UpdateProjectInput,
  ): Promise<ProjectEntity | null> {
    await this.projectRepository.update({ id: input.id }, { ...input });
    return this.getOneProject(input.id);
  }
}
