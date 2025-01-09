export function login(username, password) {
  if (!username || !password) return null;

  if (username !== "admin" || password !== "1234") return false;

  return true;
}
