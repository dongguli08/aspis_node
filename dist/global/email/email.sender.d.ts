import { ConfigService } from '@nestjs/config';
interface EmailOptions {
    to: string;
    subject: string;
    text: string;
    html?: string;
}
export declare class EmailService {
    private readonly configService;
    constructor(configService: ConfigService);
    sendEmail({ to, subject, text, html }: EmailOptions): Promise<void>;
}
export {};
