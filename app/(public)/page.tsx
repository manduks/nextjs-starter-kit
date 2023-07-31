import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome
      </h1>
      <div className="flex flex-col items-center justify-center border">
        <Link
          href="/login"
          className={buttonVariants({
            variant: 'default',
          })}
        >
          <span>Sign In</span>
        </Link>
      </div>
    </main>
  );
}
