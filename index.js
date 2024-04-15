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

  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     id: 7,
  //   },
  // });

  // console.log(deleteUser);

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

  // const user = await prisma.user.upsert({
  //   where: {
  //     email:  'BethJMorris4@jourrapide.com',
  //   },
  //   create: {
  //     email: "BethJMorris4@jourrapide.com",
  //     name: "Beth",
  //   },
  //   update: {
  //     lastName: "J. Morris Bltran Duran",
  //   },
  // });

  // console.log(user);

  const user = await prisma.user.findFirst({
    where: {
      id: 1,
    },
  });

  const newPost = await prisma.post.create({
    data: {
      title: "Padre rico, padre pobre",
      content:
        "Este primer libro es uno de los que tiene mayor reputación en todo el mundo. ",
      author: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  console.log(newPost);
}

main();
