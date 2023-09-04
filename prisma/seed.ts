import { PrismaService } from '../src/database/prisma.service';
import { UserSeeder } from '../src/seeders/User.Seeder';

async function main() {
  const prisma = new PrismaService();
  const userSeeder = new UserSeeder(prisma);

  try {
    await userSeeder.run();
    console.log('Seeder executado com sucesso!');
  } catch (error) {
    console.error('Erro ao executar o seeder:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
