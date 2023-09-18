
![Screenshot 2023-09-18 at 11 59 06 PM](https://github.com/saurav1404/invoicedash/assets/17470349/325b2183-01c9-48a2-ac84-0277ea6de6b3)

## Getting Started

This is the provided `.env.local.example` file, which you'll want to use to create your own `.env.local` file:

```
# https://vercel.com/integrations/planetscale
DATABASE_URL=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32

```

Finally, run the following commands to start the development server:

```
npm install -g pnpm
pnpm install
pnpm dev
```

You should now be able to access the application at http://localhost:3000.
