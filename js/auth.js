const KEY = "auth_ok";
const PASS = atob("b25kb2NrMjAyNg==");

(function () {
  // すでに通過済みなら何もしない
  if (localStorage.getItem(KEY) === "1") return;

  while (true) {
    const input = prompt("パスワードを入力");

    if (input === PASS) {
      localStorage.setItem(KEY, "1");
      break;
    }
  }
})();
