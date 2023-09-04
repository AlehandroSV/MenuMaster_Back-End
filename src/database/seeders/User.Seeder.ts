import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

export class UserSeeder {
  constructor(private readonly prisma: PrismaService) {}

  async seedUsers() {
    const password = bcrypt.hashSync('Admin@123', 8);

    const adminData = [
      {
        name: 'Admin',
        email: 'admin@menumaster.com',
        password: password,
        isAdminPrincipal: true,
      },
      {
        name: 'Manager',
        email: 'manager@menumaster.com',
        password: password,
        isAdminPrincipal: true,
      },
    ];

    for (const admin of adminData) {
      await this.prisma.admin.create({
        data: admin,
      });
    }
  }

  async run() {
    try {
      await this.seedUsers();
    } catch (error) {
      console.error('Erro ao executar o seeder:', error);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
