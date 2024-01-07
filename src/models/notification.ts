import { v4 } from "uuid";

export enum NotificationLevel {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

export interface Notification {
  id: string;
  level: NotificationLevel;
  message: string;
  timeout: number;
}

export function createNotification(
  level: NotificationLevel,
  message: string,
  timeout: number = 3000,
): Notification {
  return {
    id: v4(),
    level,
    message,
    timeout,
  };
}
