/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { prisma } from "./db";

export const createPost = async (value: string) => {
  const post = await prisma.post.create({
    data: {
      contents: value,
    },
  });

  return { contents: post.contents };
};
