import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const newUser = await prisma.user.create({
  //     data: {
  //       email: "BethJMorris3@jourrapide.com",
  //       name: "Beth J. Morris",
  //     },
  //   });

  //   console.log(newUser);

  // const users = await prisma.user.findMany();

  // users.map((user) => {
  //   console.log(`${user.id} - ${user.name}`);
  // });

  //   const user = await prisma.user.findFirst({
  //     where: {
  //       email: "angeldelacruzdev@gmail.com",
  //     },
  //   });

  //   console.log(user);

  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       id: 6,
  //     },
  //   });

  //   console.log(deleteUser);

  //   const updateUser = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "Angel",
  //       lastName: "De La Cruz",
  //     },
  //   });

  //   console.log(updateUser);

  //   const updateUsers = await prisma.user.updateMany({
  //     where: {
  //       name: {
  //         gte: 'Beth'
  //       },
  //     },
  //     data: {
  //       name: "Beth",
  //       lastName: "J. Morris",
  //     },
  //   });

  //   console.log(updateUsers);

  const user = await prisma.user.upsert({
    where: {
      email: "viola@prisma.io",
    },
    create: {
      email: "viola@prisma.io",
      name: "Viola the Magnificent",
    },
    update: {
      name: "Viola the Magnificent",
    },
  });

  console.log(user);
}

main();
