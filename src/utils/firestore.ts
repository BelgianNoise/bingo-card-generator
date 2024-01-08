import type { Game, GameNew } from '@/models/game';
import type { Password, PasswordNew } from '@/models/password';
import { db } from '@/firebase';
import { addDoc, setDoc, deleteDoc, collection, doc, query, where, getDocs, QuerySnapshot, getDoc } from 'firebase/firestore';
import { removeCache, savePasswordCache } from './password-cache';
import useNotificationsEventBus from '@/notificationsEventBus';
import { NotificationLevel, createNotification } from '@/models/notification';
import type { Entry, NewEntry } from '@/models/entry';

const notificationBus = useNotificationsEventBus();

export async function saveNewGame(game: GameNew, password: PasswordNew): Promise<string> {
  const addedGame = await addDoc(collection(db, 'games'), game);

  password.gameId = addedGame.id;
  await addDoc(collection(db, 'passwords'), password);

  notificationBus.emit(createNotification(
    NotificationLevel.SUCCESS,
    'Game created successfully',
  ))

  return addedGame.id;
}

export async function saveChangesGame(game: Game, doNotification = true): Promise<Game> {
  game.updatedAt = new Date().getTime();
  await setDoc(doc(db, 'games', game.id), game);

  if (doNotification) {
    notificationBus.emit(createNotification(
      NotificationLevel.SUCCESS,
      'Game updated successfully',
    ))
  }

  return game
}

export async function saveChangesPassword(
  gameId: string,
  oldPassword: string,
  newPassword: string,
): Promise<boolean> {
  const q = query(
    collection(db, 'passwords'),
    where('gameId', '==', gameId),
    where('value', '==', oldPassword),
  );
  const d = await getDocs(q) as QuerySnapshot<Password>;
  if (d.docs.length === 0) {
    return false;
  }
  const pw = d.docs[0].data();
  pw.value = newPassword;
  await setDoc(doc(db, 'passwords', d.docs[0].id), pw);

  savePasswordCache(gameId, newPassword)

  notificationBus.emit(createNotification(
    NotificationLevel.SUCCESS,
    'Password updated successfully',
  ))

  await updateUpdatedAtOnGame(gameId);

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

    notificationBus.emit(createNotification(
      NotificationLevel.ERROR,
      'Error deleting game',
    ))

    return false;
  }

  notificationBus.emit(createNotification(
    NotificationLevel.SUCCESS,
    'Game deleted successfully',
  ))

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
    notificationBus.emit(createNotification(
      NotificationLevel.ERROR,
      'Error validating password',
    ))
    return false;
  }

  return passwords[0].value === givenPassword;
}

export async function saveNewEntry(entry: NewEntry): Promise<Entry> {
  const addedEntry = await addDoc(collection(db, 'entries'), entry);

  notificationBus.emit(createNotification(
    NotificationLevel.SUCCESS,
    'Entry was successfully added :)',
  ))

  return { ...entry, id: addedEntry.id };
}

export async function saveChangesEntry(entry: Entry): Promise<Entry> {
  try {
    entry.updatedAt = new Date().getTime();
    const d = doc(collection(db, 'entries'), entry.id)

    await setDoc(d, entry);
    await updateUpdatedAtOnGame(entry.gameId);

    notificationBus.emit(createNotification(
      NotificationLevel.SUCCESS,
      'Changed successfully :)',
      2000,
    ))

    return entry;
  } catch (error) {
    console.error('Error saving entry:', error);

    notificationBus.emit(createNotification(
      NotificationLevel.ERROR,
      'Error saving entry',
    ))
    return entry;
  }
}

export async function deleteEntryForever(entry: Entry): Promise<boolean> {
  try {
    const d = doc(collection(db, 'entries'), entry.id)
    await deleteDoc(d);
    await updateUpdatedAtOnGame(entry.gameId);

    notificationBus.emit(createNotification(
      NotificationLevel.SUCCESS,
      'Entry was successfully deleted :)',
    ))

    return true;
  } catch (error) {
    notificationBus.emit(createNotification(
      NotificationLevel.ERROR,
      'Error deleting entry my man :/',
    ))

    return false;
  }
}

export async function updateUpdatedAtOnGame(gameId: string): Promise<void> {
  const d = doc(collection(db, 'games'), gameId)
  const game = await getDoc(d);
  if (!game.exists()) {
    notificationBus.emit(createNotification(
      NotificationLevel.WARNING,
      'Something went wrong syncing to the server :(',
    ))
    return;
  }
  await saveChangesGame({ ...game.data(), id: gameId } as Game, false);
}
