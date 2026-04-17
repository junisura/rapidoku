const weekDay = ["日", "月", "火", "水", "木", "金", "土"];

export function formatTimeMs(sec) {
  const sign = sec < 0 ? "-" : "";
  const abs = Math.abs(sec);

  const m = Math.floor(abs / 60);
  const s = Math.floor(abs % 60);
  const ms = Math.floor((abs % 1) * 100); // 小数2桁

  return `${sign}${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(ms).padStart(2, "0")}`;
}

export function formatYMDhms(iso) {
  const date = new Date(iso);

  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(date);

  const map = {};
  for (const p of parts) {
    map[p.type] = p.value;
  }

  return `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute}:${map.second}`;
}

export function formatYMD(iso) {
  const date = new Date(iso);

  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);

  const map = {};
  for (const p of parts) {
    map[p.type] = p.value;
  }

  return `${map.year}-${map.month}-${map.day}`;
}

export function formatTimeHm(iso) {
  const date = new Date(iso);

  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(date);

  const map = {};
  for (const p of parts) {
    map[p.type] = p.value;
  }

  return `${map.hour}:${map.minute}`;
}

export function formatJpYMD(iso) {
  const date = new Date(iso);

  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }).formatToParts(date);

  const map = {};
  for (const p of parts) {
    map[p.type] = p.value;
  }

  return `${map.year}年${map.month}月${map.day}日`;
}

export function formatJpMDA(iso) {
  const date = new Date(iso);

  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
    day: "numeric"
  }).formatToParts(date);

  const map = {};
  for (const p of parts) {
    map[p.type] = p.value;
  }
  map['weekday'] = weekDay[date.getDay()];

  return `${map.month}月${map.day}日（${map.weekday}）`;
}

export function formatJpYMDhm(iso) {
  const date = new Date(iso);

  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  }).formatToParts(date);

  const map = {};
  for (const p of parts) {
    map[p.type] = p.value;
  }
  map['weekday'] = weekDay[date.getDay()];

  return `${map.year}/${map.month}/${map.day}（${map.weekday}） ${map.hour}:${map.minute}`;
}

export function guardSameDay(workDate) {
  const today = formatYMD(new Date().toISOString());

  if (!workDate || workDate !== today) {
    alert("日付が変わったためセッションを終了します");
    location.href = "index.html";
    return false;
  }

  return true;
}
