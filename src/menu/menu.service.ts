import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async createMenuItem(name: string, price: number, category: string) {
    return this.prisma.menuItem.create({
      data: { name, price, category },
    });
  }

  async getAllMenuItems() {
    return this.prisma.menuItem.findMany();
  }

  async updateMenuItem(id: number, name: string, price: number, category: string) {
    return this.prisma.menuItem.update({
      where: { id },
      data: { name, price, category },
    });
  }

  async deleteMenuItem(id: number) {
    return this.prisma.menuItem.delete({
      where: { id },
    });
  }
}
