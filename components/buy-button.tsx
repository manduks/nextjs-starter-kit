'use client';

import { Button } from '@/components/ui/button';
import { CurrentUser } from '@/lib/session';
import { checkout } from '@/lib/checkout';

export default function BuyButton({ user }: { user: CurrentUser }) {
  return (
    <Button
      onClick={async () => {
        const url = await checkout(user);

        if (url) {
          window.location.href = url;
        }
      }}
    >
      Buy product
    </Button>
  );
}
