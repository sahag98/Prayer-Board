import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";
import { getRandomUser } from "@/database";

// Authenticating your Liveblocks application
// https://liveblocks.io/docs/rooms/authentication/access-token-permissions/nextjs

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});

export async function POST(request: NextRequest) {
  // Get the current user's unique id and info from your database

  const id = crypto.randomUUID();
  const randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const num = Math.floor(Math.random() * 20) + 1;

  const avatar = `https://liveblocks.io/avatars/avatar-${num}.png`;
  const info = {
    name: `Anon${randomTwoDigitNumber}`,
    color: color,
    avatar,
  };
  console.log(info);
  console.log("id: ", id);
  const user = getRandomUser();

  console.log("user: ", user);

  // Create a session for the current user
  // userInfo is made available in Liveblocks presence hooks, e.g. useOthers
  const session = liveblocks.prepareSession(`${user.id}`, {
    userInfo: user.info,
  });

  // Give the user access to the room
  const { room } = await request.json();
  session.allow(room, session.FULL_ACCESS);

  // Authorize the user and return the result
  const { body, status } = await session.authorize();
  return new Response(body, { status });
}
