/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";
import { middleware } from "~/server/middleware";

export const BulletinRoute = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ text: z.string() }) as z.Schema<{ text: string }>)
    .mutation(async ({ input }) => {
      await prisma.post.create({
        data: {
          contents: input.text,
        },
      });
    }),
  view: publicProcedure.query(() => {
    return prisma.post.findFirst({ orderBy: { updatedAt: "desc" } });
  }),
});
