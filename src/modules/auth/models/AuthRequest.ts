import { Request } from 'express';
import { Admin } from 'src/modules/admin/entities/admin.entity';

export interface AuthRequest extends Request {
  user: Admin;
}
