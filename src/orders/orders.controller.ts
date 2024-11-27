import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  createOrder(
    @Body('userId') userId: string,
    @Body('items') items: string,
    @Body('total') total: number,
  ) {
    return this.ordersService.createOrder(userId, items, total);
  }

  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }
}
