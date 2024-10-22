/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';

import { redisStore } from 'cache-manager-redis-yet';

import { AppController } from './app.controller';
import { TestModule } from './application/test/test.module';
import { ScheduleModule } from '@nestjs/schedule';
import { AppScheduler } from './scheduler/app.scheduler';
import { CafeInfoModule } from './application/cafe/cafeInfo.module';
import { CommonUtilModule } from './common/util/util.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV}`,
        '.env'],
    }),
    process.env.ENABLE_REDIS === '1'
      ? CacheModule.register({
          isGlobal: true,

          store: redisStore,
          url: process.env.REDIS_URI,
        })
      : CacheModule.register({
          isGlobal: true,
        }),
    /* Domain 별 모듈 관리 */
    TestModule,
    CafeInfoModule,
    CommonUtilModule,

    /* Scheduler 설정 */
    ScheduleModule.forRoot(),
  ],
  providers: [AppScheduler],
  controllers: [AppController],
})
export class AppModule {}
