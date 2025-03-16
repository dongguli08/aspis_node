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
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
const crypto_1 = require("crypto");
const email_sender_1 = require("../../../global/email/email.sender");
let RedisService = class RedisService {
    constructor(redisClient, emailService) {
        this.redisClient = redisClient;
        this.emailService = emailService;
    }
    async setEmail(email, ttl = 3600) {
        const key = (0, crypto_1.randomUUID)();
        const emailOptions = {
            to: email,
            subject: '로그인 인증 키',
            text: `안녕하세요! 로그인 인증 키는 https://aspis.ncloud.sbs/join?key=${key}입니다. 이 키를 사용하여 로그인을 진행하세요.`,
            html: `<h1>안녕하세요!</h1><p> https://aspis.ncloud.sbs/join?key=${key}입니다. 이 키를 사용하여 로그인을 진행하세요.</p>`,
        };
        await this.emailService.sendEmail(emailOptions);
        await this.redisClient.set(key, email, 'EX', ttl);
        return key;
    }
    async deleteEmail(key) {
        await this.redisClient.del(key);
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [ioredis_1.default,
        email_sender_1.EmailService])
], RedisService);
//# sourceMappingURL=email.service.js.map