# Complete Offler AI product flow

## Goal
Turn the four existing screens into one connected, mobile-friendly product flow with Clerk authentication and Razorpay billing, while preserving the current content and layout direction.

## What will be built
- Connect every meaningful action across marketing, login, dashboard, and workspace; remove or disable misleading dead controls.
- Replace the demo login redirect with Clerk sign-in/sign-up and protect dashboard/workspace access.
- Add account controls and sign-out in the app navigation.
- Connect pricing CTAs to Razorpay checkout for the paid plans, then show clear success, cancellation, and payment-failure states.
- Store verified payment and subscription status in Lovable Cloud so access cannot be unlocked by changing browser data.
- Make all four pages work cleanly on phones and tablets, including mobile navigation and a tabbed workspace for chat, code, and preview.
- Verify signed-out redirects, authenticated navigation, checkout verification, and representative phone/desktop layouts.

## Technical details
- Use Clerk's TanStack Start SDK and server middleware; private Clerk credentials remain server-only.
- Keep the Clerk publishable key browser-safe without exposing the Clerk secret key.
- Create Razorpay orders server-side, open checkout client-side, and verify payment signatures server-side before saving an entitlement.
- Add a user-owned billing table with restricted access and service-only verified writes.
- Use the existing semantic design tokens; this phase will not revisit the brand palette.

## Needed pricing assumption
Unless changed before implementation, the existing plan amounts will remain **Power: $20/month** and **Max: $80/month**, charged through Razorpay in the account-supported currency.
