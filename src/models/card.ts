export interface Card extends NewCard {
  id: string;
}

export interface NewCard {
  gameId: string;
  title: string;
  gridWidth: number;
  hasFreeSpace: boolean;
  freeSpaceText: string;
  createdAt: number;
  entryIds: string[];
  chckedEntryIds: string[];
}
