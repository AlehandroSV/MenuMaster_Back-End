import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from '../../auth/models/AuthRequest';
import { Admin } from '../entities/admin.entity';

export const CurrentAdmin = createParamDecorator(
  (data: unknown, context: ExecutionContext): Admin => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
