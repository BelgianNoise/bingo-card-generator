import type { GameNew } from '@/models/game';
import type { PasswordNew } from '@/models/password';
import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';

export async function saveNewGame(game: GameNew, password: PasswordNew): Promise<string> {
  const addedGame = await addDoc(collection(db, 'games'), game);

  password.gameId = addedGame.id;
  await addDoc(collection(db, 'passwords'), password);

  return addedGame.id;
}
