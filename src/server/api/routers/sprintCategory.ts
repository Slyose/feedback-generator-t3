import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const sprintCategoryRouter = createTRPCRouter({
  get: publicProcedure
    .output(
      z.array(
        z.object({
          id: z.string(),
          categoryName: z.string(),
        }),
      ),
    )
    .query(async ({ ctx }) => {
      return await ctx.db.sprintCategory.findMany();
    }),
});
