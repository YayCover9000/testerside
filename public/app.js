const copy = {
  en: {
    lang: "en",
    htmlLang: "en",
    welcomeLabel: "Guestbook",
    heroTitle: "Hello from Miss M and YayC",
    heroSubtitle: "Leave a note in English, Deutsch, or Japanese. Messages support Markdown and appear below in the order they were created.",
    authHeading: "Admin login",
    authCopy: "Admins can sign in to moderate entries. The main admin email comes from the local server configuration.",
    loginButton: "Log in",
    logoutButton: "Log out",
    loggedIn: "Signed in as",
    adminYes: "Admin access enabled",
    adminNo: "Signed in, but this account is not an admin.",
    guestbookHeading: "Leave a message",
    guestbookCopy: "Write your message here. Markdown is supported.",
    nameLabel: "Name",
    messageLabel: "Message",
    markdownHint: "You can use Markdown like **bold**, *italic*, lists, and links.",
    submitButton: "Post entry",
    entriesHeading: "Entries",
    entriesCopy: "Newest moderation controls only appear for logged-in admins.",
    emptyState: "No guestbook entries yet.",
    loading: "Loading guestbook entries...",
    posting: "Posting...",
    deleting: "Deleting...",
    deleteButton: "Delete",
    by: "by",
    loginError: "Login failed. Please check the email and password.",
    entryError: "Could not save your entry.",
    deleteError: "Could not delete this entry.",
    firebaseError: "Firebase is not configured yet. Please fill in the .env file first.",
    authRequired: "Only admins can delete entries.",
    postedSuccess: "Your message has been posted.",
    authorFallback: "Anonymous"
  },
  de: {
    lang: "de",
    htmlLang: "de",
    welcomeLabel: "Gästebuch",
    heroTitle: "Hallo von Miss M und YayC",
    heroSubtitle: "Hinterlasse eine Nachricht auf Englisch, Deutsch oder Japanisch. Nachrichten unterstützen Markdown und erscheinen unten in der Reihenfolge ihrer Erstellung.",
    authHeading: "Admin-Anmeldung",
    authCopy: "Admins können sich anmelden und Einträge moderieren. Die Hauptadmin-E-Mail kommt aus der lokalen Server-Konfiguration.",
    loginButton: "Anmelden",
    logoutButton: "Abmelden",
    loggedIn: "Angemeldet als",
    adminYes: "Admin-Zugriff aktiv",
    adminNo: "Angemeldet, aber dieses Konto ist kein Admin.",
    guestbookHeading: "Nachricht hinterlassen",
    guestbookCopy: "Schreibe hier deine Nachricht. Markdown wird unterstützt.",
    nameLabel: "Name",
    messageLabel: "Nachricht",
    markdownHint: "Du kannst Markdown wie **fett**, *kursiv*, Listen und Links verwenden.",
    submitButton: "Eintrag senden",
    entriesHeading: "Einträge",
    entriesCopy: "Moderationsfunktionen sind nur für eingeloggte Admins sichtbar.",
    emptyState: "Noch keine Gästebuch-Einträge vorhanden.",
    loading: "Gästebuch-Einträge werden geladen...",
    posting: "Wird gespeichert...",
    deleting: "Wird gelöscht...",
    deleteButton: "Löschen",
    by: "von",
    loginError: "Anmeldung fehlgeschlagen. Bitte E-Mail und Passwort prüfen.",
    entryError: "Der Eintrag konnte nicht gespeichert werden.",
    deleteError: "Dieser Eintrag konnte nicht gelöscht werden.",
    firebaseError: "Firebase ist noch nicht konfiguriert. Bitte zuerst die .env-Datei ausfüllen.",
    authRequired: "Nur Admins dürfen Einträge löschen.",
    postedSuccess: "Deine Nachricht wurde gespeichert.",
    authorFallback: "Anonym"
  },
  ja: {
    lang: "ja",
    htmlLang: "ja",
    welcomeLabel: "ゲストブック",
    heroTitle: "Miss M と YayC からこんにちは",
    heroSubtitle: "英語、ドイツ語、日本語でメッセージを残せます。Markdown に対応していて、投稿は作成順で下に表示されます。",
    authHeading: "管理者ログイン",
    authCopy: "管理者はログインして投稿を管理できます。メイン管理者メールはローカルのサーバー設定から読み込みます。",
    loginButton: "ログイン",
    logoutButton: "ログアウト",
    loggedIn: "ログイン中",
    adminYes: "管理者権限があります",
    adminNo: "ログインしていますが、このアカウントは管理者ではありません。",
    guestbookHeading: "メッセージを書く",
    guestbookCopy: "ここにメッセージを書いてください。Markdown が使えます。",
    nameLabel: "名前",
    messageLabel: "メッセージ",
    markdownHint: "Markdown で **太字**、*斜体*、リスト、リンクなどが使えます。",
    submitButton: "投稿する",
    entriesHeading: "投稿一覧",
    entriesCopy: "削除などの管理操作はログインした管理者だけに表示されます。",
    emptyState: "まだ投稿はありません。",
    loading: "投稿を読み込んでいます...",
    posting: "投稿中...",
    deleting: "削除中...",
    deleteButton: "削除",
    by: "投稿者",
    loginError: "ログインに失敗しました。メールアドレスとパスワードを確認してください。",
    entryError: "投稿を保存できませんでした。",
    deleteError: "この投稿を削除できませんでした。",
    firebaseError: "Firebase はまだ設定されていません。.env を先に入力してください。",
    authRequired: "投稿を削除できるのは管理者だけです。",
    postedSuccess: "メッセージを投稿しました。",
    authorFallback: "匿名"
  }
};

const state = {
  lang: "en",
  entries: [],
  currentUser: null,
  isAdmin: false,
  adminByEmail: false,
  adminByUid: false,
  database: null,
  auth: null
};

const ui = {};

window.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  bindEvents();
  setLanguage("en");
  initializeApp();
});

function cacheDom() {
  ui.heroTitle = document.getElementById("hero-title");
  ui.heroSubtitle = document.getElementById("hero-subtitle");
  ui.welcomeLabel = document.getElementById("welcome-label");
  ui.authHeading = document.getElementById("auth-heading");
  ui.authCopy = document.getElementById("auth-copy");
  ui.loginForm = document.getElementById("login-form");
  ui.loginEmail = document.getElementById("login-email");
  ui.loginPassword = document.getElementById("login-password");
  ui.loginButton = document.getElementById("login-button");
  ui.loggedInBox = document.getElementById("logged-in-box");
  ui.loggedInText = document.getElementById("logged-in-text");
  ui.logoutButton = document.getElementById("logout-button");
  ui.guestbookHeading = document.getElementById("guestbook-heading");
  ui.guestbookCopy = document.getElementById("guestbook-copy");
  ui.nameLabel = document.getElementById("name-label");
  ui.messageLabel = document.getElementById("message-label");
  ui.markdownHint = document.getElementById("markdown-hint");
  ui.entryForm = document.getElementById("entry-form");
  ui.entryName = document.getElementById("entry-name");
  ui.entryMessage = document.getElementById("entry-message");
  ui.submitButton = document.getElementById("submit-button");
  ui.flashArea = document.getElementById("flash-area");
  ui.entriesHeading = document.getElementById("entries-heading");
  ui.entriesCopy = document.getElementById("entries-copy");
  ui.entriesList = document.getElementById("entries-list");
  ui.languageButtons = Array.from(document.querySelectorAll(".lang-button"));
}

function bindEvents() {
  ui.languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  ui.entryForm.addEventListener("submit", submitEntry);
  ui.loginForm.addEventListener("submit", handleLogin);
  ui.logoutButton.addEventListener("click", handleLogout);
}

function setLanguage(lang) {
  state.lang = copy[lang] ? lang : "en";
  const t = copy[state.lang];

  document.documentElement.lang = t.htmlLang;
  document.title = `${t.heroTitle} | ${window.APP_CONFIG.pageTitle || "Guestbook"}`;

  ui.welcomeLabel.textContent = t.welcomeLabel;
  ui.heroTitle.textContent = t.heroTitle;
  ui.heroSubtitle.textContent = t.heroSubtitle;
  ui.authHeading.textContent = t.authHeading;
  ui.authCopy.textContent = t.authCopy;
  ui.loginButton.textContent = t.loginButton;
  ui.logoutButton.textContent = t.logoutButton;
  ui.guestbookHeading.textContent = t.guestbookHeading;
  ui.guestbookCopy.textContent = t.guestbookCopy;
  ui.nameLabel.textContent = t.nameLabel;
  ui.messageLabel.textContent = t.messageLabel;
  ui.markdownHint.textContent = t.markdownHint;
  ui.submitButton.textContent = t.submitButton;
  ui.entriesHeading.textContent = t.entriesHeading;
  ui.entriesCopy.textContent = t.entriesCopy;
  ui.entryName.placeholder = t.nameLabel;
  ui.entryMessage.placeholder = t.messageLabel;

  ui.languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });

  updateAuthUi();
  renderEntries();
}

function initializeApp() {
  if (!hasFirebaseConfig()) {
    renderMessage("error", translate().firebaseError);
    disableForms();
    return;
  }

  marked.setOptions({
    breaks: true,
    gfm: true
  });

  firebase.initializeApp(window.APP_CONFIG.firebaseConfig);
  state.database = firebase.database();
  state.auth = firebase.auth();

  state.auth.onAuthStateChanged(async (user) => {
    state.currentUser = user;
    state.adminByEmail = isConfiguredAdminEmail(user);
    state.adminByUid = await isAdminUid(user);
    state.isAdmin = state.adminByEmail || state.adminByUid;
    updateAuthUi();
    renderEntries();
  });

  ui.entriesList.innerHTML = `<p class="empty-state">${escapeHtml(translate().loading)}</p>`;

  state.database.ref("guestbookEntries").on("value", (snapshot) => {
    const value = snapshot.val() || {};
    state.entries = Object.entries(value)
      .map(([id, entry]) => ({ id, ...entry }))
      .sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
    renderEntries();
  });
}

function hasFirebaseConfig() {
  const config = window.APP_CONFIG && window.APP_CONFIG.firebaseConfig;
  if (!config) {
    return false;
  }

  return Object.values(config).every(Boolean);
}

async function submitEntry(event) {
  event.preventDefault();

  if (!state.database) {
    renderMessage("error", translate().firebaseError);
    return;
  }

  const author = ui.entryName.value.trim() || translate().authorFallback;
  const message = ui.entryMessage.value.trim();

  if (!message) {
    return;
  }

  const submitLabel = ui.submitButton.textContent;
  ui.submitButton.disabled = true;
  ui.submitButton.textContent = translate().posting;

  try {
    const ref = state.database.ref("guestbookEntries").push();
    await ref.set({
      author,
      message,
      language: state.lang,
      createdAt: Date.now()
    });

    ui.entryForm.reset();
    renderMessage("status", translate().postedSuccess);
  } catch (error) {
    console.error(error);
    renderMessage("error", translate().entryError);
  } finally {
    ui.submitButton.disabled = false;
    ui.submitButton.textContent = submitLabel;
  }
}

async function handleLogin(event) {
  event.preventDefault();

  if (!state.auth) {
    renderMessage("error", translate().firebaseError);
    return;
  }

  const email = ui.loginEmail.value.trim();
  const password = ui.loginPassword.value;
  const originalLabel = ui.loginButton.textContent;

  ui.loginButton.disabled = true;
  ui.loginButton.textContent = translate().loginButton + "...";

  try {
    await state.auth.signInWithEmailAndPassword(email, password);
    ui.loginForm.reset();
  } catch (error) {
    console.error(error);
    renderMessage("error", translate().loginError);
  } finally {
    ui.loginButton.disabled = false;
    ui.loginButton.textContent = originalLabel;
  }
}

async function handleLogout() {
  if (!state.auth) {
    return;
  }

  await state.auth.signOut();
}

async function deleteEntry(id) {
  if (!state.database || !state.isAdmin) {
    renderMessage("error", translate().authRequired);
    return;
  }

  const confirmed = window.confirm(`${translate().deleteButton}?`);
  if (!confirmed) {
    return;
  }

  try {
    await state.database.ref(`guestbookEntries/${id}`).remove();
  } catch (error) {
    console.error(error);
    renderMessage("error", translate().deleteError);
  }
}

function renderEntries() {
  if (!ui.entriesList) {
    return;
  }

  if (!state.entries.length) {
    ui.entriesList.innerHTML = `<p class="empty-state">${escapeHtml(translate().emptyState)}</p>`;
    return;
  }

  const t = translate();
  ui.entriesList.innerHTML = state.entries
    .map((entry) => {
      const author = escapeHtml(entry.author || t.authorFallback);
      const renderedMarkdown = marked.parse(entry.message || "");
      const body = DOMPurify.sanitize(renderedMarkdown);
      const time = formatDate(entry.createdAt);
      const deleteButton = state.isAdmin
        ? `<button type="button" class="danger-button" data-delete-id="${entry.id}">${escapeHtml(t.deleteButton)}</button>`
        : "";

      return `
        <article class="entry-card">
          <div class="entry-head">
            <div>
              <p class="entry-author">${author}</p>
              <p class="entry-meta">${escapeHtml(t.by)} ${author} · ${escapeHtml(time)}</p>
            </div>
            ${deleteButton}
          </div>
          <div class="entry-body">${body}</div>
        </article>
      `;
    })
    .join("");

  ui.entriesList.querySelectorAll("[data-delete-id]").forEach((button) => {
    button.addEventListener("click", () => deleteEntry(button.dataset.deleteId));
  });
}

function updateAuthUi() {
  const t = translate();
  const user = state.currentUser;

  if (user) {
    ui.loginForm.classList.add("hidden");
    ui.loggedInBox.classList.remove("hidden");
    ui.loggedInText.textContent = `${t.loggedIn}: ${user.email} · ${state.isAdmin ? t.adminYes : t.adminNo}`;
  } else {
    ui.loginForm.classList.remove("hidden");
    ui.loggedInBox.classList.add("hidden");
    ui.loggedInText.textContent = "";
  }
}

function translate() {
  return copy[state.lang] || copy.en;
}

function isConfiguredAdminEmail(user) {
  if (!user || !user.email) {
    return false;
  }

  const configuredAdmin = (window.APP_CONFIG.mainAdminEmail || "").trim().toLowerCase();
  return user.email.trim().toLowerCase() === configuredAdmin;
}

async function isAdminUid(user) {
  if (!user || !state.database) {
    return false;
  }

  try {
    const snapshot = await state.database.ref(`admins/${user.uid}`).get();
    return snapshot.exists() && snapshot.val() === true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function formatDate(value) {
  if (!value) {
    return "";
  }

  try {
    return new Intl.DateTimeFormat(copy[state.lang].lang, {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(value));
  } catch (error) {
    return new Date(value).toLocaleString();
  }
}

function renderMessage(type, message) {
  const className = type === "error" ? "error-box" : "status-line";
  ui.flashArea.classList.remove("hidden");
  ui.flashArea.innerHTML = `<p class="${className}">${escapeHtml(message)}</p>`;
}

function disableForms() {
  [ui.entryName, ui.entryMessage, ui.submitButton, ui.loginEmail, ui.loginPassword, ui.loginButton].forEach((element) => {
    element.disabled = true;
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
