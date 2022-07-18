import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export const users: Prisma.UserCreateInput[] = [
  {
    nickname: 'Jao',
    name: 'João Leite',
    password: 'N3w_password',
    image: 'https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg',
  },
];

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: { nickname: obj.nickname },
      update: {},
      create: {
        ...obj,
        password: await bcrypt.hash(obj.password, 10),
      },
    });
  }
};
// Ao rodar, será persistido o user
