export interface Game extends GameNew {
  id: string;
}

export interface GameNew {
  name: string;
  description: string;
  createdAt: number;
  updatedAt: number;
  hasFreeSpace: boolean;
  freeSpaceText: string;
  gridWidth: number;
}
