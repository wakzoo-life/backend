/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CafeInfoController } from './cafeInfo.controller';
import { CafeInfoService } from './cafeInfo.service';
import { CommonUtilModule } from 'src/common/util/util.module';


@Module({
  imports: [CommonUtilModule],
  controllers: [CafeInfoController],
  providers: [CafeInfoService],
})
export class CafeInfoModule {}
