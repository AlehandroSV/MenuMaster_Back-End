import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AdminToken } from './models/AdminToken';
import { Admin } from '../admin/entities/admin.entity';
import { AdminPayload } from './models/AdminPayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
  ) {}

  async validateAdmin(email: string, password: string) {
    const admin = await this.adminService.findByEmail(email);

    if (admin) {
      const isPasswordValid = await bcrypt.compare(password, admin.password);

      if (isPasswordValid) {
        return {
          ...admin,
          password: undefined,
        };
      }
    }

    throw new Error('Email ou senha providenciadas não está correta.');
  }

  login(admin: Admin): AdminToken {
    const payload: AdminPayload = {
      sub: admin.id,
      email: admin.email,
      name: admin.name,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
      admin,
    };
  }
}
