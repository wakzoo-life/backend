/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ScrapUtil } from './scrap.util';

@Module({
  providers: [ScrapUtil],
  exports: [ScrapUtil],
})
export class CommonUtilModule {}