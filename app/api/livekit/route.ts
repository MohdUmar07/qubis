import { currentUser } from "@clerk/nextjs/server";
import { AccessToken } from "livekit-server-sdk";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const room = searchParams.get("room");
  const username = searchParams.get("username");

  if (!room || !username) {
    return NextResponse.json(
      { error: 'Missing "room" or "username" query parameter' },
      { status: 400 }
    );
  }

  // Ensure the user is authenticated via Clerk
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

  if (!apiKey || !apiSecret || !wsUrl) {
    return NextResponse.json(
      { error: "Server misconfigured: missing LiveKit credentials" },
      { status: 500 }
    );
  }

  const at = new AccessToken(apiKey, apiSecret, { identity: username });

  at.addGrant({ room, roomJoin: true, canPublish: true, canSubscribe: true });

  const token = await at.toJwt();

  return NextResponse.json({ token });
}
