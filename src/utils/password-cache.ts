import { validatePassword } from "./firestore";

// 
// lol I know this is bad and insecure but we are talking stupid bingo games here.
//

export async function checkPasswordCache(
  gameId: string,
): Promise<boolean> {
  const till = sessionStorage.getItem('pw-exp-very-secure-' + gameId);
  if (!till) {
    return false;
  } else if (parseInt(till) < new Date().getTime()) {
    removeCache(gameId);
    return false;
  }
  const pw = sessionStorage.getItem('pw-very-secure-' + gameId);
  if (!pw) {
    removeCache(gameId)
    return false;
  }
  const ok = await validatePassword(gameId, pw);
  if (!ok) {
    removeCache(gameId);
  }
  return ok;
}

export function savePasswordCache(
  gameId: string,
  password: string,
): void {
  sessionStorage.setItem('pw-very-secure-' + gameId, password);
  const till = new Date().getTime() + 1000 * 60 * 60 * 23 * 1; // 23 hours
  sessionStorage.setItem('pw-exp-very-secure-' + gameId, till.toString());
}

function removeCache(gameId: string): void {
  sessionStorage.removeItem('pw-exp-very-secure-' + gameId);
  sessionStorage.removeItem('pw-very-secure-' + gameId);
}
