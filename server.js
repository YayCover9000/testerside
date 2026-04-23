const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const env = loadEnv(path.join(rootDir, ".env"));

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY || "",
  authDomain: env.FIREBASE_AUTH_DOMAIN || "",
  databaseURL: env.FIREBASE_DATABASE_URL || "",
  projectId: env.FIREBASE_PROJECT_ID || "",
  storageBucket: env.FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID || "",
  appId: env.FIREBASE_APP_ID || ""
};

const clientConfig = {
  firebaseConfig,
  mainAdminEmail: env.MAIN_ADMIN_EMAIL || "",
  pageTitle: env.PAGE_TITLE || "Miss M and YayC Guestbook"
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");

  if (url.pathname === "/api/config") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
    res.end(JSON.stringify(clientConfig, null, 2));
    return;
  }

  let filePath = url.pathname === "/" ? path.join(rootDir, "index.html") : path.join(rootDir, url.pathname);
  filePath = path.normalize(filePath);

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(error.code === "ENOENT" ? 404 : 500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(error.code === "ENOENT" ? "Not found" : "Internal server error");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    res.end(content);
  });
});

const port = Number(env.PORT || 3000);
server.listen(port, () => {
  console.log(`Guestbook running on http://localhost:${port}`);
});

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const data = fs.readFileSync(filePath, "utf8");
  return data.split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      return acc;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      return acc;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    acc[key] = value;
    return acc;
  }, {});
}
