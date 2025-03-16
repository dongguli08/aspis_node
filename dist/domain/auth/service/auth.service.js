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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(redisClient) {
        this.redisClient = redisClient;
        this.secretKey = 'FUCK';
    }
    async reissueToken(refreshToken) {
        const redisReturnValue = await this.redisClient.get(refreshToken);
        if (!redisReturnValue) {
            throw new common_1.NotFoundException('Refresh token not found');
        }
        let payload;
        try {
            payload = jwt.verify(refreshToken, this.secretKey);
        }
        catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new common_1.UnauthorizedException('Refresh token has expired');
            }
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        const accessToken = jwt.sign(payload, this.secretKey, { expiresIn: '1h' });
        return { access_token: accessToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [ioredis_1.default])
], AuthService);
//# sourceMappingURL=auth.service.js.map