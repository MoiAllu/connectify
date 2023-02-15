export enum NotificationCategory {
  Follow, //0
  Like, //1
  Comment, //2
  Share, //3
  Error, //4
}

export type NotificationType = {
  id: string;
  text: string;
  time: number;
  category: NotificationCategory;
  markedRead: boolean;
  followedBack?: boolean;
};
