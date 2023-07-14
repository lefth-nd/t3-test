import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const BulletinRoute = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      return await prisma.post.create({
        data: {
          contents: input.text,
        },
      });
    }),
  view: publicProcedure.query(() => {
    return prisma.post.findFirst({ orderBy: { updatedAt: "desc" } });
  }),
});
