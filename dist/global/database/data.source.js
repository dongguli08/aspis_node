"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const user_entity_1 = require("../../domain/user/entity/user.entity");
(0, dotenv_1.config)({ path: 'env.local' });
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: 'aspis_user',
    entities: [user_entity_1.User],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data.source.js.map