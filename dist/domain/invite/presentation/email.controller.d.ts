import { RedisService } from '../service/email.service';
import { SetEmailResponseDto } from '../dto/response/setEmail.response.dto';
import { setEmailRequestDto } from '../dto/request/setEmail.request.dto';
import { DeleteEmailResponseDto } from '../dto/response/deleteEmail.response.dto';
export declare class RedisController {
    private readonly redisService;
    constructor(redisService: RedisService);
    setEmail(body: setEmailRequestDto): Promise<SetEmailResponseDto>;
    deleteEmail(key: string): Promise<DeleteEmailResponseDto>;
}
