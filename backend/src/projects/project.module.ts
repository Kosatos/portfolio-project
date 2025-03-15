import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from '@/projects/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity])],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModule {}
