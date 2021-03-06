import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    {
      const req = context.switchToHttp().getRequest();
      return req.user.admin;
    }
  }
}
