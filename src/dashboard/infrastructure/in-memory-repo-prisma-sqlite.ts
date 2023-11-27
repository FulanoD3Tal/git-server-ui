import { PrismaClient } from '@prisma/client';
import { IInMemoryRepository } from '../domain/in-memory-repository-repository';
import crypto from 'crypto';

export class InMemoryRepositoryPrismaSQLite implements IInMemoryRepository {
  private prisma = new PrismaClient();
  async list(): Promise<Repository[]> {
    return await this.prisma.repository.findMany();
  }
  async createRepo(newRepo: NewRepository): Promise<Repository> {
    return await this.prisma.repository.create({
      data: {
        ...newRepo,
        uuid: crypto.randomUUID(),
      },
    });
  }
  async deleteRepo(idRepo: string): Promise<Repository> {
    return await this.prisma.repository.delete({ where: { uuid: idRepo } });
  }
}
