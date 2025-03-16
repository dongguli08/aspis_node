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
exports.RedisController = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("../service/email.service");
const setEmail_request_dto_1 = require("../dto/request/setEmail.request.dto");
let RedisController = class RedisController {
    constructor(redisService) {
        this.redisService = redisService;
    }
    async setEmail(body) {
        const key = await this.redisService.setEmail(body.email);
        return { message: 'Email saved successfully', key: key };
    }
    async deleteEmail(key) {
        await this.redisService.deleteEmail(key);
        return { message: 'Email deleted successfully' };
    }
};
exports.RedisController = RedisController;
__decorate([
    (0, common_1.Post)('/set'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [setEmail_request_dto_1.setEmailRequestDto]),
    __metadata("design:returntype", Promise)
], RedisController.prototype, "setEmail", null);
__decorate([
    (0, common_1.Delete)('delete/:key'),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RedisController.prototype, "deleteEmail", null);
exports.RedisController = RedisController = __decorate([
    (0, common_1.Controller)('redis'),
    __metadata("design:paramtypes", [email_service_1.RedisService])
], RedisController);
//# sourceMappingURL=email.controller.js.map