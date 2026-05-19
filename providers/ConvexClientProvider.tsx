"use client";

import { ClerkProvider, useAuth, useUser } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient, useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";

function UserSync() {
  const { user } = useUser();
  const upsertUser = useMutation(api.user.upsert);

  useEffect(() => {
    if (user) {
      upsertUser({
        username: user.fullName || user.username || "User",
        imageUrl: user.imageUrl,
        email: user.primaryEmailAddress?.emailAddress || "",
      }).catch(console.error);
    }
  }, [user, upsertUser]);

  return null;
}


type Props = {
  children: React.ReactNode;
};

const CONVEX_URL =  process.env.NEXT_PUBLIC_CONVEX_URL || " ";
// const CLERK_PUB_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY; process.env.CLERK_JWT_ISSUER_DOMAIN

const convex = new ConvexReactClient(CONVEX_URL);
const ConvexClientProviders = ({ children }: Props) => {
  return (
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/overview">
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <UserSync />
        {children}
      </ConvexProviderWithClerk>
      </ClerkProvider> 
  );
};


export default ConvexClientProviders;
