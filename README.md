# Miss M and YayC Guestbook

Simple multilingual guestbook with:

- English, German, and Japanese copy
- Firebase Realtime Database storage
- Markdown guestbook messages
- Admin login with Firebase Auth
- Main admin email configured via environment variables
- Vercel-ready deployment
- Optional local preview server

## Local setup

1. Copy `.env.example` to `.env`
2. Fill in your Firebase values and `MAIN_ADMIN_EMAIL`
3. Create the admin user in Firebase Authentication (Email/Password)
4. Add the admin user's Firebase Auth UID under `admins/<UID> = true` in Realtime Database
5. Apply the rules from `firebase.rules.json`
6. Start the app:

```bash
node server.js
```

Then open `http://localhost:3000`.

## Vercel deployment

In Vercel Project Settings -> Environment Variables, add:

- `PAGE_TITLE`
- `MAIN_ADMIN_EMAIL`
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_DATABASE_URL`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

Then redeploy the project. The frontend loads these values through `/api/config`.

## Optional Docker

The old Docker setup can still be adapted, but the primary deployment target is now Vercel.

## Firebase structure

- Entries are stored under `guestbookEntries`
- Each entry includes:
  - `author`
  - `message`
  - `language`
  - `createdAt`
- Admin users are stored under `admins`
  - Example:

```json
{
  "admins": {
    "YOUR_FIREBASE_AUTH_UID": true
  }
}
```

## Important note about security

The app now supports two admin signals:

- `MAIN_ADMIN_EMAIL` in local `.env` for the main admin identity in the UI
- `admins/<uid> = true` in Firebase Realtime Database for actual protected delete permissions in rules

For production, the Firebase rules are the important part.
