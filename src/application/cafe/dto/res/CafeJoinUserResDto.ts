/* eslint-disable prettier/prettier */

/**
 * DTO: 카페 가입 유저 수 조회 응답
 */
export class CafeJoinUserCountResDto {

  userCount: number = 0;

  constructor(test: number) {
    this.userCount = test;
  }

  static of(userCount: number): CafeJoinUserCountResDto {
    const it = new CafeJoinUserCountResDto(userCount);
    return it;
  }
}
