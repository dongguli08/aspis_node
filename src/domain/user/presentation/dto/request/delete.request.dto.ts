import { IsNotEmpty, IsString } from "class-validator";

export class deleteRequestDto{
    @IsNotEmpty()
   user_name:string
}