// Search state is scoped to the current tab, deployment, user, and list view.
const VERSION = 1;
const memoryCache = new Map();
const SORT_KEYS = new Set(["newest", "oldest", "views", "clips"]);

export function createDefaultJobFilters() {
  return {
    areas: [],
    cities: [],
    employment_type_ids: [],
    service_type_ids: [],
    merit_ids: [],
    job_position_ids: [],
    salary_min: "",
    salary_type: "",
  };
}

export function normalizeJobFilters(value) {
  const src = value && typeof value === "object" ? value : {};
  const result = createDefaultJobFilters();
  for (const key of ["areas", "cities"]) {
    result[key] = Array.isArray(src[key])
      ? [...new Set(src[key].filter((v) => typeof v === "string" && v.trim()).map((v) => v.trim()))]
      : [];
  }
  for (const key of ["employment_type_ids", "service_type_ids", "merit_ids", "job_position_ids"]) {
    result[key] = Array.isArray(src[key])
      ? [...new Set(src[key].map(Number).filter((v) => Number.isSafeInteger(v) && v > 0))]
      : [];
  }
  result.salary_min = String(src.salary_min ?? "").replace(/[^\d]/g, "");
  result.salary_type = ["monthly", "hourly"].includes(src.salary_type) ? src.salary_type : "";
  return result;
}

function normalizeState(value) {
  const src = value && typeof value === "object" ? value : {};
  const page = Number(src.page);
  const scrollY = Number(src.scrollY);
  return {
    version: VERSION,
    filters: normalizeJobFilters(src.filters),
    page: Number.isSafeInteger(page) && page > 0 ? page : 1,
    sort: SORT_KEYS.has(src.sort) ? src.sort : "newest",
    scrollY: Number.isFinite(scrollY) && scrollY > 0 ? scrollY : 0,
  };
}

export function jobListStateKey(baseUrl, userId, view) {
  return `fukushimachi:job-list:v${VERSION}:${baseUrl}:${userId || "guest"}:${view}`;
}

export function readJobListState(key) {
  // Prefer the latest in-tab state, including when a storage write hit its quota.
  const cached = memoryCache.get(key);
  if (cached) return normalizeState(cached);
  try {
    const raw = window.sessionStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.version === VERSION) {
        const state = normalizeState(parsed);
        memoryCache.set(key, state);
        return normalizeState(state);
      }
    }
  } catch {
    // Storage can be disabled or contain invalid JSON. Navigation must still work.
  }
  return null;
}

export function writeJobListState(key, value) {
  const state = normalizeState(value);
  memoryCache.set(key, state);
  try {
    window.sessionStorage.setItem(key, JSON.stringify(state));
  } catch {
    // In-memory fallback still restores state during SPA navigation.
  }
}
