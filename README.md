# Ankit Aggarwal Portfolio

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site.

## Bulk content import

The complete starter content lives in `content/portfolio.json`. To create or update all Sanity documents in one command:

1. In Sanity Manage, open **API → Tokens** and create a token with **Editor** permissions. Copy it once; Sanity will not show it again.
2. In the Codespace terminal, run:

```bash
SANITY_API_TOKEN=your-token npm run content:import
```

The importer creates or updates the site settings, capabilities, selected work, and experience documents using stable IDs, so it is safe to run again after editing `content/portfolio.json`. Never commit the token or put it in a `NEXT_PUBLIC_` variable.

## Admin console setup

The admin console is available at [/admin](http://localhost:3000/admin) and is powered by Sanity. It is intentionally not usable until a Sanity project is connected.

1. Create a Sanity account using `aggarwal.ankit5@gmail.com` at [sanity.io](https://www.sanity.io/).
2. Create a new project named `Ankit Aggarwal Portfolio` with a `production` dataset.
3. Enable Google sign-in for the account and turn on Google two-step verification.
4. Copy `.env.example` to `.env.local` and replace `your-sanity-project-id` with the project ID from Sanity.
5. Restart the development server and open `http://localhost:3000/admin`.
6. Sign in with the approved Google account and create the `siteSettings`, `capability`, `project`, and `experience` documents.

Only members added to the Sanity project can access the Studio. The public site continues to show the resume-based fallback content until CMS documents are created.