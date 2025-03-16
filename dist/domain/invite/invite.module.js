"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteModule = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./service/email.service");
const email_controller_1 = require("./presentation/email.controller");
const redis_datasource_1 = require("../../global/redis/redis.datasource");
const email_module_1 = require("../../global/email/email.module");
let InviteModule = class InviteModule {
};
exports.InviteModule = InviteModule;
exports.InviteModule = InviteModule = __decorate([
    (0, common_1.Module)({
        imports: [redis_datasource_1.RedisModule,
            email_module_1.EmailModule,
            InviteModule
        ],
        providers: [email_service_1.RedisService],
        controllers: [email_controller_1.RedisController],
        exports: [email_service_1.RedisService],
    })
], InviteModule);
//# sourceMappingURL=invite.module.js.map