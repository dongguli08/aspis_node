"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./domain/user/user.module");
const auth_module_1 = require("./domain/auth/auth.module");
const data_source_1 = require("./global/database/data.source");
const redis_datasource_1 = require("./global/redis/redis.datasource");
const invite_module_1 = require("./domain/invite/invite.module");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./domain/user/entity/user.entity");
const email_module_1 = require("./global/email/email.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                ...data_source_1.dataSource.options,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            redis_datasource_1.RedisModule,
            invite_module_1.InviteModule,
            email_module_1.EmailModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map