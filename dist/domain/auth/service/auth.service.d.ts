import Redis from 'ioredis';
import { tokenResponseDto } from '../dto/response/token.response.dto';
export declare class AuthService {
    private readonly redisClient;
    private readonly secretKey;
    constructor(redisClient: Redis);
    reissueToken(refreshToken: string): Promise<tokenResponseDto>;
}
