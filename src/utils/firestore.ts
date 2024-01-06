import type { Game, GameNew } from '@/models/game';
import type { Password, PasswordNew } from '@/models/password';
import { db } from '@/firebase';
import { addDoc, setDoc, collection, doc, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';
import { savePasswordCache } from './password-cache';

export async function saveNewGame(game: GameNew, password: PasswordNew): Promise<string> {
  const addedGame = await addDoc(collection(db, 'games'), game);

  password.gameId = addedGame.id;
  await addDoc(collection(db, 'passwords'), password);

  return addedGame.id;
}

export async function saveChangesGame(game: Game): Promise<Game> {
  game.updatedAt = new Date().getTime();
  await setDoc(doc(db, 'games', game.id), game);
  return game
}

export async function saveChangesPassword(
  gameId: string,
  oldPassword: string,
  newPassword: string,
): Promise<boolean> {
  // TODO
  return true;
}

export async function deleteGame(gameId: string): Promise<boolean> {
  // TODO
  return true;
}

export async function validatePassword(
  gameId: string,
  givenPassword: string,
): Promise<boolean> {
  const q = query(collection(db, 'passwords'), where('gameId', '==', gameId));
  const d = await getDocs(q) as QuerySnapshot<Password>;
  const passwords = d.docs.map(doc => doc.data());
  if (passwords.length === 0) {
    console.log('OH GOD! No password found for game:', gameId)
    return false;
  }
  return passwords[0].value === givenPassword;
}
