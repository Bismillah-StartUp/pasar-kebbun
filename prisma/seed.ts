import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.adminUser.findUnique({ where: { username: 'admin' } });

  if (existing) {
    console.log('Admin sudah ada, skip.');
    return;
  }

  const hashed = await bcrypt.hash('admin123', 10);

  const admin = await prisma.adminUser.create({
    data: {
      fullName: 'Admin Pasar Kebbun',
      email: 'admin@pasarkebbun.id',
      username: 'admin',
      password: hashed,
    },
  });

  console.log('Admin berhasil dibuat:', admin.username, '| uuid:', admin.uuid);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
