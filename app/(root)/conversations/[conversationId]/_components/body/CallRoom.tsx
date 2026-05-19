"use client";

import { useUser } from "@clerk/nextjs";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Props = {
  audio: boolean;
  video: boolean;
  handleDisconnect: () => void;
};

export const CallRoom = ({ audio, video, handleDisconnect }: Props) => {
  const { user } = useUser();
  const [token, setToken] = useState("");
  const params = useParams();
  const conversationId = params.conversationId as string;

  useEffect(() => {
    if (!user?.fullName && !user?.username) return;

    const name = user.fullName || user.username || "Anonymous";

    (async () => {
      try {
        const resp = await fetch(
          `/api/livekit?room=${conversationId}&username=${name}`
        );
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error("Failed to fetch LiveKit token:", e);
      }
    })();
  }, [user?.fullName, user?.username, conversationId]);

  if (token === "") {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Loader2 className="animate-spin h-10 w-10 text-primary mb-4" />
        <p className="text-muted-foreground animate-pulse">Connecting to call...</p>
      </div>
    );
  }

  return (
    <LiveKitRoom
      video={video}
      audio={audio}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      data-lk-theme="default"
      onDisconnected={handleDisconnect}
      className="w-full h-full rounded-lg overflow-hidden border border-border/50"
    >
      <VideoConference />
    </LiveKitRoom>
  );
};
