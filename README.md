# Miss M and YayC Guestbook

Simple multilingual guestbook with:

- English, German, and Japanese copy
- Firebase Realtime Database storage
- Markdown guestbook messages
- Admin login with Firebase Auth
- Main admin email configured locally in `.env`
- Docker support

## Local setup

1. Copy `.env.example` to `.env`
2. Fill in your Firebase values and `MAIN_ADMIN_EMAIL`
3. Create the admin user in Firebase Authentication (Email/Password)
4. Add the admin user's Firebase Auth UID under `admins/<UID> = true` in Realtime Database
5. Apply the rules from `firebase.rules.json`
4. Start the app:

```bash
node server.js
```

Then open `http://localhost:3000`.

## Docker

```bash
docker compose up --build
```

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
