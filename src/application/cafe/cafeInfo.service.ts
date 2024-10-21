/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ScrapUtil } from '../../common/util/scrap.util';

/**
 * Service for getting information about the wakzoo cafe.
 */
@Injectable()
export class CafeInfoService {

	constructor(private readonly scrapUtil : ScrapUtil) {}
	
	public async getCafeJoinedUserCount(): Promise<number> {

		const url = "https://cafe.naver.com/steamindiegame/18328997"
    const scrapedData = await this.scrapUtil.scrape(url, '.mem-cnt-info');
    const cleanedData: string = scrapedData.map(data => data.replace(/[\t\n]/g, ''))[0];
		const index: number = cleanedData.indexOf('비공개');
    const joinedUserCount: number= parseInt(cleanedData.substring(5, index));

    return joinedUserCount;
	}

}