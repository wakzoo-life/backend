/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
	public getTestValue(): string {
    return 'get-test-value';
	}

	public postTestValue(strParam: string): string {
		return strParam;
	}
}