"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const typeorm_2 = require("typeorm");
const jwt = require("jsonwebtoken");
const bcryptjs_1 = require("bcryptjs");
const ioredis_1 = require("ioredis");
const email_sender_1 = require("../../../global/email/email.sender");
let UserService = class UserService {
    constructor(userRepository, redisClient, emailService) {
        this.userRepository = userRepository;
        this.redisClient = redisClient;
        this.emailService = emailService;
    }
    async createUser(data) {
        const { user_name, key, user_password } = data;
        const encryptPassword = await this.encryptPassword(user_password);
        const user_email = await this.redisClient.get(key);
        const user = await this.userRepository.findOneBy({ user_email });
        if (user)
            throw new common_1.HttpException('ALREADY_USING_EMAIL', common_1.HttpStatus.CONFLICT);
        console.log(user_email);
        console.log(`키값: ${key}`);
        console.log(`Redis에서 가져온 이메일: ${user_email}`);
        this.redisClient.del(key);
        await this.userRepository.save({
            user_name,
            user_email,
            user_password: encryptPassword
        });
        return common_1.HttpStatus.OK;
    }
    async loginUser(data) {
        const { user_email, user_password } = data;
        const user = await this.userRepository.findOneBy({ user_email });
        if (!user)
            throw new common_1.HttpException('NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        const match = await (0, bcryptjs_1.compare)(user_password, user.user_password);
        if (!match)
            throw new common_1.HttpException('INVALID_PASSWORD', common_1.HttpStatus.UNAUTHORIZED);
        const payload = { authority: user.user_authority, id: user.id };
        const secretKey = 'FUCK';
        const accessToken = jwt.sign(payload, secretKey, { expiresIn: '1h' });
        const refreshToken = jwt.sign(payload, secretKey, { expiresIn: '1y' });
        await this.redisClient.set(refreshToken, user.id, 'EX', 31536000);
        return {
            access_token: accessToken,
            refresh_token: refreshToken
        };
    }
    async getUser() {
        return await this.userRepository.find();
    }
    async DeleteUser(data) {
        const { user_name } = data;
        try {
            const user = await this.userRepository.findOne({ where: { user_name } });
            if (!user) {
                throw new Error('User not found');
            }
            await this.userRepository.delete({ user_name });
            console.log(`User ${user_name} has been deleted successfully.`);
        }
        catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
    async encryptPassword(password) {
        const DEFAULT_SALT = 11;
        return (0, bcryptjs_1.hash)(password, DEFAULT_SALT);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ioredis_1.default,
        email_sender_1.EmailService])
], UserService);
//# sourceMappingURL=user.service.js.map