import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

// @ts-ignore
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    return redirect('/');
  }

  return children;
}
