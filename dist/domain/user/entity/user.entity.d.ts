import { UserAuthority } from "./authority.enum";
export declare class User {
    id: number;
    user_name: string;
    user_email: string;
    user_authority: UserAuthority;
    user_password: string;
}
