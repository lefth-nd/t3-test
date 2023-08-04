import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import getFace from "~/server/face";

export const FaceGenRoute = createTRPCRouter({
  generateFace: publicProcedure.query(({}) => {
    // fix later?
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const data = getFace();
    return data;
  }),
});
