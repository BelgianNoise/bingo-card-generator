export interface Entry extends NewEntry {
  id: string;
}

export interface NewEntry {
  gameId: string;
  updatedAt: number;
  value: string;
}
