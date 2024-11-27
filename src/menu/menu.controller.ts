import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('menu')
@UseGuards(JwtAuthGuard)
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Post()
  createMenuItem(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('category') category: string,
  ) {
    return this.menuService.createMenuItem(name, price, category);
  }

  @Get()
  getAllMenuItems() {
    return this.menuService.getAllMenuItems();
  }

  @Put(':id')
  updateMenuItem(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('category') category: string,
  ) {
    return this.menuService.updateMenuItem(+id, name, price, category);
  }

  @Delete(':id')
  deleteMenuItem(@Param('id') id: string) {
    return this.menuService.deleteMenuItem(+id);
  }
}
