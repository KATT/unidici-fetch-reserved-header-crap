import { signIn, signOut } from 'next-auth/react';
import { trpc } from '../utils/trpc';

export default function Home() {
  const dashboard = trpc.useQuery(['dashboard'], {
    refetchOnWindowFocus: false,
  });

  console.log(dashboard);
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
      {dashboard.data?.hello ? (
        <div>HELLO FROM TRPC {dashboard.data?.hello}</div>
      ) : null}
    </div>
  );
}
