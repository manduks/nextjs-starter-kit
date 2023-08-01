import { getCurrentUserSession } from '@/lib/session';
import { redirect } from 'next/navigation';

// @ts-ignore
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUserSession();

  if (!user) {
    return redirect('/');
  }

  return children;
}
