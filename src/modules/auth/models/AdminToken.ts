import { Admin } from 'src/modules/admin/entities/admin.entity';

export interface AdminToken {
  access_token: string;
  admin: Admin;
}
