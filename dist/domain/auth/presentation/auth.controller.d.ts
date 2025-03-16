import { tokenRequestDto } from '../dto/request/token.request.dto';
import { tokenResponseDto } from '../dto/response/token.response.dto';
import { AuthService } from '../service/auth.service';
export declare class AuthController {
    private readonly AuthService;
    constructor(AuthService: AuthService);
    setEmail(body: tokenRequestDto): Promise<tokenResponseDto>;
}
