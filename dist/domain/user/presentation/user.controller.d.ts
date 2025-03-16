import { HttpStatus } from "@nestjs/common";
import { UserService } from "../service/user.service";
import { deleteRequestDto } from "./dto/request/delete.request.dto";
import { loginRequestDto } from "./dto/request/login.request.dto";
import { registerRequestDto } from "./dto/request/register.request.dto";
import { loginResponseDto } from "./dto/response/login.response.dto";
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    signup(data: registerRequestDto): Promise<HttpStatus>;
    login(data: loginRequestDto): Promise<loginResponseDto>;
    delete(data: deleteRequestDto): Promise<void>;
    getUsers(): Promise<import("../entity/user.entity").User[]>;
}
