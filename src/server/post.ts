import { prisma } from "./db";

export const createPost = async (value: string) => {
  const post = await prisma.post.create({
    data: {
      contents: value,
    },
  });

  return { contents: post.contents };
};
