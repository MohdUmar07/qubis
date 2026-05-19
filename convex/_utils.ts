import { QueryCtx, MutationCtx } from "./_generated/server";


export const getUserByClerkId = async ({
    ctx,
    clerkId,
}: {
    ctx : QueryCtx | MutationCtx;
    clerkId : string;
}) => {

    console.log("Fetching user with clerkId:", clerkId);

    const users = await ctx.db.query("users").collect();
console.log("All Users:", users);
    return await ctx.db
    .query("users")
    .withIndex("by_clerkId",(q)=>q.eq("clerkId",clerkId))
    .unique();

};