/* eslint-disable prettier/prettier */

import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression, Interval } from "@nestjs/schedule";
import { log } from "console";
import { CafeInfoService } from "src/application/cafe/cafeInfo.service";

@Injectable()
export class AppSchedulerService {

	constructor(private readonly cafeInfoService : CafeInfoService) {}

	@Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT) 
	// @Interval(1000)
	handleCron() {
		
		this.cafeInfoService.setCafeJoinedUserCount();

	}

}