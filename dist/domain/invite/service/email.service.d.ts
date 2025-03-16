import Redis from 'ioredis';
import { EmailService } from 'src/global/email/email.sender';
export declare class RedisService {
    private readonly redisClient;
    private emailService;
    constructor(redisClient: Redis, emailService: EmailService);
    setEmail(email: string, ttl?: number): Promise<string>;
    deleteEmail(key: string): Promise<void>;
}
