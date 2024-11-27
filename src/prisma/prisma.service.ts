import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
    log: ['query'];
  }

  async onModuleDestroy() {
    // Adicionando asserção de tipo explicitamente
    await this.$disconnect();
  }
}


export const prisma = new PrismaClient();

