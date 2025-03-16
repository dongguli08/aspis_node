import { HttpStatus } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import Redis from 'ioredis';
import { EmailService } from 'src/global/email/email.sender';
import { deleteRequestDto } from '../presentation/dto/request/delete.request.dto';
import { loginRequestDto } from '../presentation/dto/request/login.request.dto';
import { registerRequestDto } from '../presentation/dto/request/register.request.dto';
import { loginResponseDto } from '../presentation/dto/response/login.response.dto';
export declare class UserService {
    private userRepository;
    private readonly redisClient;
    private emailService;
    constructor(userRepository: Repository<User>, redisClient: Redis, emailService: EmailService);
    createUser(data: registerRequestDto): Promise<HttpStatus>;
    loginUser(data: loginRequestDto): Promise<loginResponseDto>;
    getUser(): Promise<User[]>;
    DeleteUser(data: deleteRequestDto): Promise<void>;
    encryptPassword(password: string): Promise<string>;
}
