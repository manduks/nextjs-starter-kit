'use server';

import { CurrentUser } from '@/lib/session';
import env from './env';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';

export async function checkout(user: CurrentUser) {
  const headersList = headers();
  const origin = headersList.get('origin');

  if (!user || !user.email) {
    throw new Error('Unauthorized');
  }

  // Create a checkout session to upgrade.
  const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: env.STRIPE_PRICE_ID,
        quantity: 1,
      },
    ],
    mode: 'payment',
    customer_email: user.email,
    metadata: {
      userId: user.id,
    },
    success_url: `${origin}/dashboard?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/dashboard?canceled=true`,
  });

  return stripeSession.url;
}
