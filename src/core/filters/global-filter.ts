import { Request, Response } from 'express';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class GlobalFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const req = host.switchToHttp().getRequest<Request>();
    const res = host.switchToHttp().getResponse<Response>();
    console.log({
      // body: req.body,
      headers: req.headers,
      method: req.method,
      url: req.url,
    });

    res.status(exception.getStatus()).json({ statusCode: exception.getStatus(), message: exception.message });
  }
}
