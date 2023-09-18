## Getting Started

This is the provided `.env.local.example` file, which you'll want to use to create your own `.env.local` file:

```
# https://vercel.com/integrations/planetscale
DATABASE_URL=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32

Finally, run the following commands to start the development server:

```
npm install -g pnpm
pnpm install
pnpm dev
```

You should now be able to access the application at http://localhost:3000.
