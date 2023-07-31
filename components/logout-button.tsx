'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <Button
      variant="ghost"
      onClick={() => {
        signOut({ callbackUrl: '/' });
      }}
    >
      <span className="font-semibold"> Logout</span>
    </Button>
  );
}
