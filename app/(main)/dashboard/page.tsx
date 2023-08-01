import { getCurrentUserSession, isProUser } from '@/lib/session';

import BuyButton from '@/components/buy-button';
import LogoutButton from '@/components/logout-button';

export default async function Dashboard() {
  const user = await getCurrentUserSession();
  const isPro = await isProUser();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Dashboard
      </h1>
      <div className="flex flex-col items-center justify-center border">
        <LogoutButton />
      </div>
      <div className="flex flex-col items-center justify-center">
        {isPro ? null : <BuyButton user={user} />}
      </div>
    </main>
  );
}
