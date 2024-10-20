/* eslint-disable prettier/prettier */

import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { log } from "console";

@Injectable()
export class AppScheduler {

	private readonly logger = new Logger(AppScheduler.name);

	@Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT) 
	handleCron() {
		log('Called cron every second');
	}
}