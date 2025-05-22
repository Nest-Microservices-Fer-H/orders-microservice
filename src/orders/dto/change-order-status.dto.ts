import { IsEnum, IsUUID } from 'class-validator';
import { orderStatusList } from '../enum/order.enum';
import { OrderStatus } from '@prisma/client';

export class ChangeOrderStatusDto {
  @IsUUID(4)
  id: string;

  @IsEnum(orderStatusList, {
    message: `Possible status are ${orderStatusList}`,
  })
  status: OrderStatus;
}
