import { internalMutation, internalQuery, mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = internalMutation({
  args: {
    username: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", args);
  },
});

export const get = internalQuery({
  args: { clerkId: v.string() },
  async handler(ctx, args) {
    return ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .unique();
  },
});

export const upsert = mutation({
  args: {
    username: v.string(),
    imageUrl: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .unique();

    if (user !== null) {
      await ctx.db.patch(user._id, {
        username: args.username,
        imageUrl: args.imageUrl,
        email: args.email,
      });
    } else {
      await ctx.db.insert("users", {
        clerkId: identity.subject,
        username: args.username,
        imageUrl: args.imageUrl,
        email: args.email,
      });
    }
  },
});