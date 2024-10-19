/* eslint-disable prettier/prettier */

import { TestService } from './test.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { log } from 'console';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TestResDto } from './dto/res/TestResDto';
import { TestReqDto } from './dto/req/TestReqDto';



@ApiTags('Test - Test API')
@Controller('/test')
export class TestController {

  constructor(private readonly testService: TestService) {}

  @Get(':testParam')
  @ApiResponse({ status: 200, description: 'Success', type: TestResDto }) 
  get(@Param('testParam') testParam: string): TestResDto {

    log('testParam', testParam);
    const result = TestResDto.from(testParam);
    return result;
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Success', type: TestResDto }) 
  post(@Body() testReqDto: TestReqDto): TestResDto {
    log('testReqDto', testReqDto);
    
    const resultStr = this.testService.postTestValue(testReqDto.strParam);
    const result = TestResDto.from(resultStr);
    return result;
  }

}