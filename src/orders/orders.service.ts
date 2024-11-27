import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(userId: string, items: string, total: number) {
    return this.prisma.order.create({
      data: { userId, items, total },
    });
  }

  async getAllOrders() {
    return this.prisma.order.findMany({
      include: { user: true },
    });
  }
}
