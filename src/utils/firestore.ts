import type { Game, GameNew } from '@/models/game';
import type { PasswordNew } from '@/models/password';
import { db } from '@/firebase';
import { addDoc, setDoc, collection, doc } from 'firebase/firestore';

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
