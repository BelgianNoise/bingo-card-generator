export interface Password extends PasswordNew {
  id: string;
}

export interface PasswordNew {
  gameId: string;
  value: string;
}
