import type { Game, GameNew } from '@/models/game';
import type { Password, PasswordNew } from '@/models/password';
import { db } from '@/firebase';
import { addDoc, setDoc, deleteDoc, collection, doc, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';
import { removeCache } from './password-cache';

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

export async function deleteGameForever(gameId: string): Promise<boolean> {
  try {
    // first delete the game itself
    await deleteDoc(doc(db, 'games', gameId));
    // delete the password
    const q = query(collection(db, 'passwords'), where('gameId', '==', gameId));
    const d = await getDocs(q);
    for (const pwid of d.docs.map(doc => doc.id)) {
      await deleteDoc(doc(db, 'passwords', pwid));
    }
    // delete the password cache
    removeCache(gameId);
    // delete the entries
    const q2 = query(collection(db, 'entries'), where('gameId', '==', gameId));
    const d2 = await getDocs(q2);
    for (const eid of d2.docs.map(doc => doc.id)) {
      await deleteDoc(doc(db, 'entries', eid));
    }
    // delete the cards
    const q3 = query(collection(db, 'cards'), where('gameId', '==', gameId));
    const d3 = await getDocs(q3);
    for (const cid of d3.docs.map(doc => doc.id)) {
      await deleteDoc(doc(db, 'cards', cid));
    }
  } catch (error) {
    console.error('Error deleting game:', error);
    return false;
  }
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
