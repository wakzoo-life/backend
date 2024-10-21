/* eslint-disable prettier/prettier */

import { Controller, Get } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CafeInfoService } from "./cafeInfo.service";



@ApiTags('cafeInfo API')
@Controller('/cafeInfo')
export class CafeInfoController {

  constructor(private readonly cafeInfoService: CafeInfoService) {}

  @Get('')
  @ApiResponse({ status: 200, description: 'Success', type: Map }) 
  get(): Promise<number> {

    const joinUserCount: Promise<number> = this.cafeInfoService.getCafeJoinedUserCount();
    
    return joinUserCount;
  }

}