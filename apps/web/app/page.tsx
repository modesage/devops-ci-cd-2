import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <h1>Username: {user?.username}</h1>
      <h1>Password: {user?.password}</h1>
    </div>
  );
}
