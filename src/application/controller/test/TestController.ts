/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { log } from 'console';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TestResDto } from './dto/res/TestResDto';
import { TestReqDto } from './dto/req/TestReqDto';



@ApiTags('Test - Test API')
@Controller('/test')
export class TestController {

  @Get(':testParam')
  @ApiResponse({ status: 200, description: 'Success', type: TestResDto }) 
  get(@Param('testParam') testParam: string): TestResDto {

    log('testParam', testParam);
    const result = new TestResDto('get-test-value');
    return result;
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Success', type: TestResDto }) 
  post(@Body() testReqDto: TestReqDto): TestResDto {
    log('testReqDto', testReqDto);
    const result = new TestResDto(testReqDto.strParam);
    return result;
  }

}