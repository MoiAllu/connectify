import { NotificationCategory } from "../interfaces";

export function enumSafety(req: string): NotificationCategory {
  switch (req) {
    case "Follow": {
      return NotificationCategory.Follow;
    }
    case "Like": {
      return NotificationCategory.Like;
    }
    case "Share": {
      return NotificationCategory.Share;
    }
    case "Comment": {
      return NotificationCategory.Comment;
    }
    default: {
      return NotificationCategory.Error;
    }
  }
}
